import { GraphQLClient } from 'graphql-request';
import { headers } from 'next/headers';
import { NextResponse } from 'next/server';
// File: app/api/webhooks/clerk/route.ts
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
  const headerPayload = headers();
  const svix_id = headerPayload.get('svix-id');
  const svix_timestamp = headerPayload.get('svix-timestamp');
  const svix_signature = headerPayload.get('svix-signature');

  // If there are no headers, error out
  if (!svix_id || !svix_timestamp || !svix_signature) {
    return NextResponse.json(
      { message: 'Error occured -- no svix headers' },
      { status: 400 }
    );
  }

  // Create a new Svix instance with your secret.
  const wh = new Webhook(webhookSecret);

  let evt: WebhookEvent;

  // Verify the payload with the headers
  try {
    evt = wh.verify(payload, {
      'svix-id': svix_id,
      'svix-timestamp': svix_timestamp,
      'svix-signature': svix_signature,
    }) as WebhookEvent;
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

// Define the structure of the webhook event
type WebhookEvent = {
  data: {
    id: string;
    [key: string]: any;
  };
  object: string;
  type: string;
};
