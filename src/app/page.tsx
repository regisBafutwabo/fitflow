import { redirect } from 'next/navigation';

// import { client } from '@/lib/apollo-client';
import { auth } from '@clerk/nextjs/server';

import { Main } from './components/Main';

export default async function Home() {
  const { userId } = auth();
  if (!userId) {
    redirect('/sign-in');
  }
  return <Main />;
}
