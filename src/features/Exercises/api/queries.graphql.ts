import { gql } from '@apollo/client';

export const GET_TODAY_EXERCISES = gql`
  query GetTodayExercises($dayOfTheWeek: String!, $workoutPlanId: uuid!) {
    workout_days(
      where: {
        plan_id: { _eq: $workoutPlanId }
        day: { day: { _eq: $dayOfTheWeek } }
      }
    ) {
      id
      muscle_group {
        name
      }
      workout_day_exercises {
        id 
        workout_day_id
        exercise {
          id
          name
          reps
          duration
          sets
          weight
        }
      }
    }
  }
`;
