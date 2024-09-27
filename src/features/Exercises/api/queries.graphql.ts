import { gql } from '@apollo/client';

export const GET_TODAY_EXERCISES = gql`
  query GetTodayExercises($dayOfTheWeek: String!, $workoutPlanId: uuid!) {
    workout_days(
      where: {
        plan_id: { _eq: $workoutPlanId }
        day_of_week: { _eq: $dayOfTheWeek }
      }
    ) {
      muscle_group
      day_of_week
      workout_day_exercises {
        reps
        duration
        sets
        exercise {
          name
        }
      }
    }
  }
`;
