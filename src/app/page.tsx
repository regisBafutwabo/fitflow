import { redirect } from 'next/navigation';

import { auth } from '@clerk/nextjs/server';

export default async function Home() {
  const { userId, getToken } = auth();
  console.log('TOKENNJJ', await getToken({ template: 'hasura' }));
  if (!userId) {
    redirect('/sign-in');
  }

  return (
    <div className='container mx-auto p-4'>
      <h1 className='text-3xl font-bold mb-8'>Welcome</h1>
    </div>
  );
}
