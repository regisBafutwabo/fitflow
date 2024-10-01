import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

export const SkeletonExercise = () => (
  <Card>
    <CardHeader>
      <Skeleton className='h-6 w-3/4' />
    </CardHeader>
    <CardContent>
      <div className='space-y-2'>
        {[...Array(3)].map((_, i) => (
          <div key={i} className='flex items-center space-x-2'>
            <Skeleton className='h-4 w-20' />
            <Skeleton className='h-9 w-9' />
            <Skeleton className='h-9 w-16' />
            <Skeleton className='h-9 w-9' />
          </div>
        ))}
      </div>
    </CardContent>
    <CardFooter>
      <Skeleton className='h-9 w-full' />
    </CardFooter>
  </Card>
);
