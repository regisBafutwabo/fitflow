import { gql } from '@apollo/client';

export const GET_SELECTED_WORKOUT_PLAN = gql`
  query GetSelectedWorkoutPlan {
    workoutPlan @client {
      id
      name
      day
    }
  }
`;
