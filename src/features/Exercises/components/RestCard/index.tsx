import { Coffee } from 'lucide-react';

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export const RestDayCard = () => {
  return (
    <Card className='col-span-full'>
      <CardHeader>
        <CardTitle className='flex items-center justify-center text-2xl gap-2'>
          <Coffee className='mr-2' /> Rest Day
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className='text-center mb-4'>
          Today is your rest day. Take time to recover and prepare for your next
          workout.
        </p>
      </CardContent>
      {/* <CardFooter>
          <Button className='w-full' variant='outline'>
            Log Recovery Activity
          </Button>
        </CardFooter> */}
    </Card>
  );
};
