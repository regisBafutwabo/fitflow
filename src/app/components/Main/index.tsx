import { ExercisesList } from '@/features/Exercises/components/ExercisesList';
import {
  GetUserInfoQuery,
  GetWorkoutPlansQuery,
} from '@/gql';
import {
  GET_USER_INFO,
  GET_WORKOUT_PLANS,
} from '@/gql/common/queries.graphql';
import { client } from '@/lib/apollo-client';

export const Main = async () => {
  const [userInfoResponse, workoutPlansResponse] = await Promise.all([
    client.query<GetUserInfoQuery>({ query: GET_USER_INFO }),
    client.query<GetWorkoutPlansQuery>({ query: GET_WORKOUT_PLANS }),
  ]);

  const userInfo = userInfoResponse.data;
  const workoutPlansData = workoutPlansResponse.data;

  const name = userInfo?.users[0]?.first_name || 'Guest';

  const today = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  const day = new Date().toLocaleDateString('en-US', { weekday: 'long' });

  const workoutPlans =
    workoutPlansData?.workout_plans.map(plan => ({
      id: plan?.id,
      name: plan?.name,
    })) || [];

  const favorites =
    workoutPlansData?.favorites_workout_plans.map(favorite => ({
      id: favorite.workout_plan?.id,
      name: favorite?.workout_plan?.name,
    })) || [];

  const mergedPlans = [
    ...workoutPlans,
    ...(favorites
      ?.filter(favorite => !workoutPlans.some(plan => plan.id === favorite?.id))
      .map(favorite => ({
        id: favorite?.id,
        name: favorite?.name,
      })) || []),
  ];

  const planId = mergedPlans[0]?.id || '';

  return (
    <div className='container md:mx-auto mx-0 p-4'>
      {/* Header */}
      <div className='flex flex-col items-center justify-between md:flex-row'>
        <h1 className='text-xl md:text-3xl font-bold mb-8 md:block hidden'>
          Welcome Back {userInfoResponse.loading ? '...' : name}
        </h1>
        <div className='flex justify-center mb-8'>
          <button className='bg-blue-500 text-white font-bold py-2 px-4 rounded shadow hover:bg-blue-600 transition duration-300'>
            Create Workout Plan
          </button>
        </div>
      </div>
      {/* Workout Plan Section */}
      <div className='flex flex-col justify-between md:items-center md:flex-row items-start mb-8'>
        <div className='mb-4 md:mb-0'>
          <h1 className='text-xl md:text-2xl font-bold '>
            Today Schedule(
            {today})
          </h1>
        </div>
        <div>
          <select
            id='workout-plans'
            className='border border-gray-300 rounded-md p-3 w-full'
            // onChange={handleWorkoutPlanChange}
          >
            {mergedPlans.length > 0 ? (
              mergedPlans.map(plan => (
                <option key={plan.id} value={plan.id}>
                  {plan.name}
                </option>
              ))
            ) : (
              <option value=''>-- No Plans Available --</option>
            )}
          </select>
        </div>
      </div>
      {/* Exercises List */}
      <div className='border border-gray-300 p-4 rounded-md  mx-2 w-auto'>
        {day && planId && <ExercisesList day={day} planId={planId} />}
      </div>
    </div>
  );
};
