import { redirect } from 'next/navigation';

// import { client } from '@/lib/apollo-client';
import { auth } from '@clerk/nextjs/server';

import { Main } from './components/Main';

export default async function Home() {
  const { userId } = auth();
  if (!userId) {
    redirect('/sign-in');
  }

  // const handleWorkoutPlanChange = async () => {
  //   // const selectedPlanId = event.target.value;
  //   // if (selectedPlanId) {
  //   //   const { data: todayExercisesData } = await client.query<GetTodayExercisesQuery>({
  //   //     query: GET_TODAY_EXERCISES,
  //   //     variables: { dayOfTheWeek: day, workoutPlanId: selectedPlanId },
  //   //   });
  //   //   // Assuming there's a function to handle the display of today's exercises
  //   //   displayTodayExercises(todayExercisesData.workout_days);
  //   // }
  // };

  return (
    <Main/>
  );
}
