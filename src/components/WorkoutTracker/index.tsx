'use client';
import React, { useEffect, useState } from 'react';

import {
  Exercise_Logs,
  useCreateExerciseLogMutation,
  useCreateWorkoutLogMutation,
  useGetWorkoutPlanQuery,
  Workout_Days,
} from '@/gql';

interface WorkoutTrackerProps {
  userId: string;
}

type Workout = Workout_Days & {
  date: string;
  exercises: {
    id: string;
    name: string;
    sets: number;
    reps: number;
    weight: string;
    completed: boolean;
  }[];
};

const WorkoutTracker: React.FC<WorkoutTrackerProps> = ({ userId }) => {
  const [weekStarting, setWeekStarting] = useState('');
  const [workouts, setWorkouts] = useState<any[]>([]);

  const { loading, error, data } = useGetWorkoutPlanQuery({
    variables: { userId },
  });

  const [createWorkoutLog, { loading: createLogLoading }] =
    useCreateWorkoutLogMutation();
  const [createExerciseLog] = useCreateExerciseLogMutation();

  useEffect(() => {
    if (data?.workout_plans[0]) {
      const plan = data.workout_plans[0];
      setWorkouts(
        plan.workout_days.map(day => ({
          ...day,
          date: '',
          exercises: day.workout_day_exercises.map(ex => ({
            id: ex?.exercise.id,
            name: ex?.exercise.name,
            sets: ex?.exercise?.sets,
            reps: ex?.exercise?.reps,
            weight: '',
            completed: false,
            logs: ex.exercise.exercise_logs,
          })),
        }))
      );
    }
  }, [data]);

  const handleDateChange = (index: number, date: string) => {
    const newWorkouts = [...workouts];
    newWorkouts[index].date = date;
    newWorkouts[index].exercises = newWorkouts[index].exercises.map(
      (exercise: any) => {
        const loggedExercise = exercise?.logs?.filter(
          (log: any) => log?.workout_log?.date === date
        )[0];
        return {
          ...exercise,
          completed: loggedExercise?.completed || false,
          weight: loggedExercise?.weight?.toString(),
        };
      }
    );
    setWorkouts(newWorkouts);
  };

  const handleWeightChange = (
    dayIndex: number,
    exerciseIndex: number,
    weight: string
  ) => {
    const newWorkouts = [...workouts];
    newWorkouts[dayIndex].exercises[exerciseIndex].weight = weight;
    setWorkouts(newWorkouts);
  };

  const handleCompletedChange = async (
    dayIndex: number,
    exerciseIndex: number
  ) => {
    const newWorkouts = [...workouts];
    const exercise = newWorkouts[dayIndex].exercises[exerciseIndex];
    exercise.completed = !exercise.completed;
    setWorkouts(newWorkouts);

    if (exercise.completed) {
      try {
        const { data: workoutLogData } = await createWorkoutLog({
          variables: {
            userId,
            workoutDayId: newWorkouts[dayIndex].id,
            date:
              newWorkouts[dayIndex].date ||
              new Date().toISOString().split('T')[0],
          },
        });

        if (workoutLogData?.insert_workout_logs_one) {
          await createExerciseLog({
            variables: {
              workoutLogId: workoutLogData.insert_workout_logs_one.id,
              exerciseId: exercise.id,
              weight: parseFloat(exercise.weight) || null,
              sets: exercise.sets,
              reps: exercise.reps,
              completed: true,
            },
          });
        }
      } catch (error) {
        console.error('Error logging exercise:', error);
        exercise.completed = false;
        setWorkouts([...newWorkouts]);
      }
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error?.message}</p>;

  const completedExercises = workouts.flatMap(day =>
    day.exercises.filter((ex: Exercise_Logs) => ex.completed)
  ).length;

  return (
    <div className='bg-white shadow-md rounded px-4 sm:px-8 pt-6 pb-8 mb-4'>
      <h1 className='text-xl sm:text-2xl font-bold mb-4 text-center'>
        6-Day Machine-Based Workout Plan for Beginners
      </h1>
      <div className='mb-4'>
        <label
          className='block text-gray-700 text-sm font-bold mb-2'
          htmlFor='week-starting'
        >
          Week Starting:
        </label>
        <input
          className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
          id='week-starting'
          type='date'
          value={weekStarting}
          onChange={e => setWeekStarting(e.target.value)}
        />
      </div>
      {workouts.map((day, dayIndex) => (
        <div key={day.day} className='mb-6 bg-gray-50 rounded-lg p-4'>
          <h2 className='text-lg sm:text-xl font-semibold mb-2'>
            {day.day_of_week} - {day.muscle_group}
          </h2>
          <input
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4'
            type='date'
            value={day.date}
            onChange={e => handleDateChange(dayIndex, e.target.value)}
          />
          <div className='overflow-x-auto'>
            <table className='w-full'>
              <thead>
                <tr className='bg-gray-200'>
                  <th className='px-2 sm:px-4 py-2 text-left'>Exercise</th>
                  <th className='px-2 sm:px-4 py-2 text-left'>Sets x Reps</th>
                  <th className='px-2 sm:px-4 py-2 text-left'>Weight (kg)</th>
                  <th className='px-2 sm:px-4 py-2 text-left'>Done</th>
                </tr>
              </thead>
              <tbody>
                {day.exercises.map(
                  (
                    exercise: {
                      name:
                        | boolean
                        | React.ReactElement<
                            any,
                            string | React.JSXElementConstructor<any>
                          >
                        | Iterable<React.ReactNode>
                        | Promise<React.AwaitedReactNode>
                        | React.Key
                        | null
                        | undefined;
                      weight: string | number | readonly string[] | undefined;
                      completed: boolean | undefined;
                    },
                    exerciseIndex: any
                  ) => (
                    <tr key={exercise?.name as string} className='border-b'>
                      <td className='px-2 sm:px-4 py-2'>{exercise.name}</td>
                      <td className='px-2 sm:px-4 py-2'>
                        {exercise.name === 'Stairmaster'
                          ? '20 mins at speed 4'
                          : '3 x 12'}
                      </td>
                      <td className='px-2 sm:px-4 py-2'>
                        <input
                          className='shadow appearance-none border rounded w-16 sm:w-20 py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                          type='number'
                          value={exercise.weight}
                          onChange={e =>
                            handleWeightChange(
                              dayIndex,
                              exerciseIndex,
                              e.target.value
                            )
                          }
                          disabled={
                            exercise.name === 'Stairmaster' ||
                            day.day === 'Sunday'
                          }
                        />
                      </td>
                      <td className='px-2 sm:px-4 py-2'>
                        <input
                          type='checkbox'
                          checked={exercise.completed}
                          onChange={() =>
                            handleCompletedChange(dayIndex, exerciseIndex)
                          }
                          className='form-checkbox h-5 w-5 text-blue-600'
                        />
                      </td>
                    </tr>
                  )
                )}
              </tbody>
            </table>
          </div>
        </div>
      ))}
      <div className='mt-4 font-bold text-center'>
        Weekly Completion: {completedExercises} / 25 exercises
      </div>
    </div>
  );
};

export default WorkoutTracker;
