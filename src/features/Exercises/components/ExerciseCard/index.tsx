import {
  Minus,
  Plus,
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Workout_Day_Exercises } from '@/gql';

type ExerciseCardProps = {
  workout: Workout_Day_Exercises;
  handleChange: (id: string, field: string, value: number) => void;
  handleComplete: (id: string) => void;
};

export const ExerciseCard = ({ workout, handleChange, handleComplete }: ExerciseCardProps) => {
  const duration = workout?.duration || 0;
  const reps = workout?.reps || 0;
  const sets = workout?.sets || 0;

  return (
    <Card
      key={workout.id}
    >
      <CardHeader>
        <CardTitle>{workout?.exercise?.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className='space-y-2'>
          <div className='flex items-center space-x-2'>
            <Label htmlFor={`reps-${workout?.id}`} className='w-20'>
              Reps:
            </Label>
            <Button
              size='icon'
              variant='outline'
              onClick={() =>
                handleChange(workout?.id, 'reps', Math.max(0, reps - 1))
              }
            >
              <Minus className='h-4 w-4' />
            </Button>
            <Input
              id={`reps-${workout?.id}`}
              type='number'
              value={workout.reps || 0}
              onChange={e =>
                handleChange(workout?.id, 'reps', parseInt(e.target.value) || 0)
              }
              className='w-16 text-center'
            />
            <Button
              size='icon'
              variant='outline'
              onClick={() =>
                handleChange(workout?.id, 'reps', reps + 1)
              }
            >
              <Plus className='h-4 w-4' />
            </Button>
          </div>
          <div className='flex items-center space-x-2'>
            <Label htmlFor={`sets-${workout.id}`} className='w-20'>
              Sets:
            </Label>
            <Button
              size='icon'
              variant='outline'
              onClick={() =>
                handleChange(workout.id, 'sets', Math.max(0, sets - 1))
              }
            >
              <Minus className='h-4 w-4' />
            </Button>
            <Input
              id={`sets-${workout.id}`}
              type='number'
              value={workout.sets || 0}
              onChange={e =>
                handleChange(workout.id, 'sets', parseInt(e.target.value) || 0)
              }
              className='w-16 text-center'
            />
            <Button
              size='icon'
              variant='outline'
              onClick={() =>
                handleChange(workout.id, 'sets', sets + 1)
              }
            >
              <Plus className='h-4 w-4' />
            </Button>
          </div>
          <div className='flex items-center space-x-2'>
            <Label htmlFor={`duration-${workout.id}`} className='w-20'>
              Duration:
            </Label>
            <Button
              size='icon'
              variant='outline'
              onClick={() =>
                handleChange(workout.id, 'duration', Math.max(0, duration - 5))
              }
            >
              <Minus className='h-4 w-4' />
            </Button>
            <Input
              id={`duration-${workout.id}`}
              type='number'
              value={duration}
              onChange={e =>
                handleChange(workout.id, 'duration', parseInt(e.target.value) || 0)
              }
              className='w-16 text-center'
            />
            <Button
              size='icon'
              variant='outline'
              onClick={() => handleChange(workout.id, 'duration', duration + 5)}
            >
              <Plus className='h-4 w-4' />
            </Button>
            <span className='text-sm text-gray-500'>sec</span>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button
          onClick={() => handleComplete(workout.id)}
          className='w-full'
        >
          Complete
        </Button>
      </CardFooter>
    </Card>
  );
};
