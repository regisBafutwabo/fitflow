import { GraphQLClient } from 'graphql-request';
import { NextResponse } from 'next/server';
import { Webhook } from 'svix';

import { gql } from '@apollo/client';

const webhookSecret: string = process.env.CLERK_WEBHOOK_SECRET || '';
const hasuraEndpoint = process.env.HASURA_PROJECT_ENDPOINT || '';
const hasuraAdminSecret = process.env.NEXT_PUBLIC_HASURA_ADMIN_SECRET || '';

const graphQLClient = new GraphQLClient(hasuraEndpoint, {
  headers: {
    'x-hasura-admin-secret': hasuraAdminSecret,
  },
});

const UPSERT_USER = gql`
  mutation UpsertUser(
    $clerk_id: String!
    $email: String!
    $first_name: String!
    $last_name: String!
    $last_seen: timestamptz
  ) {
    insert_users_one(
      object: {
        clerk_id: $clerk_id
        email: $email
        first_name: $first_name
        last_name: $last_name
        last_seen: $last_seen
      }
      on_conflict: {
        constraint: users_clerk_id_key
        update_columns: [email, last_seen, first_name, last_name]
      }
    ) {
      id
    }
  }
`;

async function upsertUserInHasura(
  clerkId: string,
  email: string,
  lastSeen: string | null,
  first_name: string,
  last_name: string
) {
  try {
    console.log('UPSERT DATA', clerkId, email, lastSeen, first_name, last_name);
    await graphQLClient.request(UPSERT_USER, {
      clerk_id: clerkId,
      email,
      last_seen: lastSeen ? new Date(parseInt(lastSeen)).toISOString() : null,
      first_name,
      last_name,
    });
    console.log('User upserted in Hasura');
  } catch (error) {
    console.error('Error upserting user in Hasura:', error);
  }
}

export async function POST(req: Request) {
  const payload = await req.text();
  // Log the received payload for debugging

  // Create a new Svix instance with your secret.
  const wh = new Webhook(webhookSecret);

  let evt: WebhookEvent;

  // Verify the payload with the headers
  try {
    evt = JSON.parse(payload) as WebhookEvent; // Adjust based on the actual payload structure
  } catch (err) {
    console.error('Error verifying webhook:', err);
    return NextResponse.json({ message: 'Error occured' }, { status: 400 });
  }

  // Get the ID and type
  const eventType = evt.type;

  if (eventType === 'user.created' || eventType === 'user.updated') {
    const {
      id: clerkId,
      email_addresses,
      last_sign_in_at,
      first_name,
      last_name,
    } = evt.data;

    console.log(`Webhook with an ID of ${clerkId} and type of ${eventType}`);
    console.log('Webhook body:', evt.data);

    const primaryEmail = email_addresses.find(
      (email: any) => email.id === evt.data.primary_email_address_id
    );
    if (primaryEmail) {
      console.log('Primary Email', primaryEmail);
      await upsertUserInHasura(
        clerkId,
        primaryEmail.email_address,
        last_sign_in_at,
        first_name,
        last_name
      );
    }
  }

  return NextResponse.json(
    { message: 'Webhook received and processed' },
    { status: 200 }
  );
}

export async function GET() {
  return NextResponse.json({ message: 'Webhook endpoint is working' });
}

// Define the structure of the webhook event
type WebhookEvent = {
  data: {
    id: string;
    [key: string]: any;
  };
  object: string;
  type: string;
};
