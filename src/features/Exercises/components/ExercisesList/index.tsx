'use client';
import { useState } from 'react';

import { Dumbbell } from 'lucide-react';
import ReactConfetti from 'react-confetti';

import { Button } from '@/components/ui/button';
import {
  CreateWorkoutLogMutation,
  GetTodayExercisesQuery,
  GetUserInfoQuery,
} from '@/gql';
import { GET_USER_INFO } from '@/gql/common/queries.graphql';
import {
  useMutation,
  useQuery,
} from '@apollo/client';

import { CREATE_WORKOUT_LOG } from '../../api/mutation.graphql';
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
  const width = window.innerWidth;
  const height = window.innerHeight;
  const [completedExercises, setCompletedExercises] = useState<any[]>([]);
  const [confettiUp, setConfettiUp] = useState(false)

  
  const {data:userInfo} = useQuery<GetUserInfoQuery>(GET_USER_INFO);

  const { data, loading, error } = useQuery<GetTodayExercisesQuery>(
    GET_TODAY_EXERCISES,
    {
      variables: { dayOfTheWeek: day, workoutPlanId: planId },
    }
  );

  const [createWorkoutLog,{error:creatingError, loading:creating}] = useMutation<CreateWorkoutLogMutation>(CREATE_WORKOUT_LOG, {variables:{
    userId: userInfo?.users[0]?.id,
    exercises: completedExercises,
    date: new Date().toISOString().split('T')[0],
    workoutDayId: data?.workout_days[0]?.id
  }})

  const handleComplete = async () => {
    console.log("exercises", completedExercises)
    await createWorkoutLog();
    if(!creating)
    setConfettiUp(true);
    // Add confetti functionality here
  }

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
  const workouts = data?.workout_days[0]?.workout_day_exercises;

  return (
    <>
    <div className='flex flex-col gap-4'>
      <div className='flex gap-2'>
        <Dumbbell />
        <h1 className='font-bold'>{muscleGroupName}</h1>
      </div>
      <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-3'>
        {workouts?.map((workout: any) => {
          return (
            <ExerciseCard
              key={workout?.exercise?.id}
              exercise={workout?.exercise}
              setCompletedExercises={setCompletedExercises}
              isComplete={completedExercises.some(exercise => exercise.exercise_id === workout.exercise.id)}
            />
          );
        })}
      </div>
      <div>
        <Button onClick={handleComplete} className='w-full bg-green-500' disabled={confettiUp || creating}>
          {creating ?"Creating Logs...":"Complete Workout"}
          
        </Button>
      </div>
    </div>
    <ReactConfetti
      width={width}
      height={height}
      numberOfPieces={300}
      run={confettiUp}
      onConfettiComplete={()=> console.log("DONE")}
    />
    </>
  );
};
