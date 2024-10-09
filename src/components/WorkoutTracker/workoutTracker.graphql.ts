import { gql } from '@apollo/client';

export const GET_WORKOUT_PLAN = gql`
  query GetWorkoutPlan($userId: uuid!) {
    workout_plans(where: { user_id: { _eq: $userId } }) {
      id
      name
      workout_days {
        day {
          day
        }
        muscle_group {
          name
        }
        workout_day_exercises {
          id
          exercise {
            id
            name
            sets
            reps
            exercise_logs {
              completed
              exercise_id
              reps
              sets
              weight
              workout_log {
                date
              }
            }
          }
        }
      }
    }
  }
`;

// export const CREATE_WORKOUT_LOG = gql`
//   mutation CreateWorkoutLog(
//     $userId: uuid!
//     $workoutDayId: uuid!
//     $date: date!
//   ) {
//     insert_workout_logs_one(
//       object: { user_id: $userId, workout_day_id: $workoutDayId, date: $date }
//     ) {
//       id
//     }
//   }
// `;

export const CREATE_EXERCISE_LOG = gql`
  mutation CreateExerciseLog(
    $workoutLogId: uuid!
    $exerciseId: uuid!
    $weight: numeric
    $sets: Int
    $reps: Int
    $completed: Boolean!
  ) {
    insert_exercise_logs_one(
      object: {
        workout_log_id: $workoutLogId
        exercise_id: $exerciseId
        weight: $weight
        sets: $sets
        reps: $reps
        completed: $completed
      }
    ) {
      id
    }
  }
`;
