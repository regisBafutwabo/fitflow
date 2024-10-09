import { gql } from '@apollo/client';

export const CREATE_WORKOUT_LOG = gql`
mutation CreateWorkoutLog($date:date,$exercises:[exercise_logs_insert_input!]!, $userId: uuid,) {
  insert_workout_logs_one(object: {date: $date, exercise_logs: {data: $exercises}, user_id: $userId}) {
    date
    exercise_logs {
      exercise {
        name
      }
      reps
      sets
      weight
      duration
    }
    id
    user_id
    workout_day {
      day {
        day
      }
    }
  }
}
`;
