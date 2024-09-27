'use client';
import { Workout_Plans } from '@/gql';
import { useQuery } from '@apollo/client';

import { GET_TODAY_EXERCISES } from '../../api/queries.graphql';
import { ExerciseCard } from '../ExerciseCard';
import { SkeletonExercise } from '../SkeletonExercise';

type ExercisesListProps = {
  day?: string;
  planId?: string;
  logId?: string;
};

export const ExercisesList = ({ planId, day }: ExercisesListProps) => {
  //   if (!day || !planId) return null; // Optional: Handle missing props
  const { data, loading, error } = useQuery(GET_TODAY_EXERCISES, {
    variables: { dayofTheWeek: day, workoutPlanId: planId },
  });
  //   const loading = true;
  //   const error: any = null;
  //   const data: any = null;
  console.log('data', data, error);
  if (loading)
    return (
      <>
        {[...Array(4)].map((_, index) => (
          <SkeletonExercise key={index} />
        ))}
      </>
    );
  if (error) return <div>Error: {error?.message}</div>;
  return (
    <>
      {data?.workout_days[0]?.workout_day_exercises?.map((exercise: any) => (
        <ExerciseCard
          key={exercise.id}
          workout={exercise}
          handleChange={() => {}} // Provide a function here
          handleComplete={() => {}} // Provide a function here
        />
      ))}
    </>
  );
};
