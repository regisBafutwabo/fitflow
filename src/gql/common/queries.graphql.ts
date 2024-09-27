import { gql } from '@apollo/client';

export const GET_USER_INFO = gql`
  query GetUserInfo {
    users {
      id
      first_name
      email
    }
  }
`;

export const GET_WORKOUT_PLANS = gql`
  query GetWorkoutPlans {
    workout_plans(
      where: {
        _or: [
          { default: { _eq: true } }
          { user: { clerk_id: { _eq: "X-Hasura-User-Id" } } }
          {
            favorites_workout_plans: {
              user: { clerk_id: { _eq: "X-Hasura-User-Id" } }
            }
          }
        ]
      }
    ) {
      name
      id
      user {
        id
        first_name
        last_name
      }
    }
    favorites_workout_plans {
      workout_plan {
        name
        id
        user {
          first_name
          last_name
        }
      }
    }
  }
`;
