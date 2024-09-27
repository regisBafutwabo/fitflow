import { gql } from '@apollo/client';

export const UPDATE_SELECTED_WORKOUT_PLAN = gql`
  mutation UpdateSelectedWorkoutPlan($id: uuid, $name: String, $day: String) {
    updateSelectedWorkoutPlan(id: $id, name: $name, day: $day) @client
  }
`;
