'use client';
import { Dumbbell } from 'lucide-react';

import { GetTodayExercisesQuery } from '@/gql';
import { useQuery } from '@apollo/client';

import { GET_TODAY_EXERCISES } from '../../api/queries.graphql';
import { ExerciseCard } from '../ExerciseCard';
import { RestDayCard } from '../RestCard';
import { SkeletonExercise } from '../SkeletonExercise';

type ExercisesListProps = {
  day?: string;
  planId?: string;
  logId?: string;
};

export const ExercisesList = ({ planId, day }: ExercisesListProps) => {
  const { data, loading, error } = useQuery<GetTodayExercisesQuery>(
    GET_TODAY_EXERCISES,
    {
      variables: { dayOfTheWeek: day, workoutPlanId: planId },
    }
  );
  if (loading)
    return (
      <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-3'>
        {[...Array(4)].map((_, index) => (
          <SkeletonExercise key={index} />
        ))}
      </div>
    );

  if (error) {
    return (
      <div className='flex items-center justify-center text-2xl'>
        <p className='text-red-500'>Error: {error?.message}</p>
      </div>
    );
  }

  if (data?.workout_days[0]?.muscle_group?.name === 'Rest Day') {
    return <RestDayCard />;
  }

  const muscleGroupName = data?.workout_days[0]?.muscle_group?.name;
  const exercises = data?.workout_days[0]?.workout_day_exercises;

  return (
    <div className='flex flex-col gap-4'>
      <div className='flex gap-2'>
        <Dumbbell />
        <h1 className='font-bold'>{muscleGroupName}</h1>
      </div>
      <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-3'>
        {exercises?.map((exercise: any) => {
          return (
            <ExerciseCard
              key={exercise.id}
              workout={exercise}
              handleChange={(id, field, value) =>
                console.log(`Change ${field} to ${value} for exercise ${id}`)
              }
              handleComplete={id => console.log(`Exercise ${id} completed`)}
            />
          );
        })}
      </div>
    </div>
  );
};
