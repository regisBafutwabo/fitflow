import { useState } from 'react';

import { Minus, Plus } from 'lucide-react';

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

export const ExerciseCard = ({
  workout,
  handleChange,
  handleComplete,
}: ExerciseCardProps) => {
  const [reps, setReps] = useState(workout?.exercise?.reps);
  const [weight, setWeight] = useState(workout?.exercise?.weight);
  const [sets, setSets] = useState(workout?.exercise?.sets);
  const [duration, setDuration] = useState(workout?.exercise?.duration);

  const handleRepsChange = (newReps: number) => {
    setReps(newReps);
    handleChange(workout.id, 'reps', newReps);
  };

  const handleSetsChange = (newSets: number) => {
    setSets(newSets);
    handleChange(workout.id, 'sets', newSets);
  };

  const handleDurationChange = (newDuration: number) => {
    setDuration(newDuration);
    handleChange(workout.id, 'duration', newDuration);
  };
  const handleWeightChange = (newWeight: number) => {
    setWeight(newWeight);
    handleChange(workout.id, 'weight', newWeight);
  };

  const handleSubmitExercise = () => {};

  return (
    <Card key={workout.id} className='w-full md:w-auto'>
      <CardHeader className='sticky md:relative top-0 bg-white'>
        <CardTitle>{workout?.exercise?.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className='space-y-2'>
          {reps && (
            <div className='flex items-center space-x-2'>
              <Label htmlFor={`reps-${workout?.id}`} style={{ width: 80 }}>
                Reps:
              </Label>
              <Button
                size='icon'
                variant='outline'
                onClick={() => handleRepsChange(Math.max(0, reps - 1))}
              >
                <Minus className='h-4 w-4' />
              </Button>
              <Input
                id={`reps-${workout?.id}`}
                type='number'
                value={reps || 0}
                onChange={e => handleRepsChange(parseInt(e.target.value) || 0)}
                className='w-16 text-center'
              />
              <Button
                size='icon'
                variant='outline'
                onClick={() => handleRepsChange(reps + 1)}
              >
                <Plus className='h-4 w-4' />
              </Button>
            </div>
          )}
          {sets && (
            <div className='flex items-center space-x-2'>
              <Label htmlFor={`sets-${workout.id}`} style={{ width: 80 }}>
                Sets:
              </Label>
              <Button
                size='icon'
                variant='outline'
                onClick={() => handleSetsChange(Math.max(0, sets - 1))}
              >
                <Minus className='h-4 w-4' />
              </Button>
              <Input
                id={`sets-${workout.id}`}
                type='number'
                value={sets || 0}
                onChange={e => handleSetsChange(parseInt(e.target.value) || 0)}
                className='w-16 text-center'
              />
              <Button
                size='icon'
                variant='outline'
                onClick={() => handleSetsChange(sets + 1)}
              >
                <Plus className='h-4 w-4' />
              </Button>
            </div>
          )}
          {weight && (
            <div className='flex items-center space-x-2'>
              <Label htmlFor={`weight-${workout.id}`} style={{ width: 80 }}>
                Weight:
              </Label>
              <Button
                size='icon'
                variant='outline'
                onClick={() => handleWeightChange(Math.max(0, weight - 1))}
              >
                <Minus className='h-4 w-4' />
              </Button>
              <Input
                id={`weight-${workout.id}`}
                type='number'
                value={weight}
                onChange={e =>
                  handleWeightChange(parseInt(e.target.value) || 0)
                }
                className='w-16 text-center'
              />
              <Button
                size='icon'
                variant='outline'
                onClick={() => handleWeightChange(weight + 1)}
              >
                <Plus className='h-4 w-4' />
              </Button>
              <span className='text-sm text-gray-500'>kg</span>
            </div>
          )}
          {duration && (
            <div className='flex items-center space-x-2'>
              <Label htmlFor={`duration-${workout.id}`} style={{ width: 80 }}>
                Duration:
              </Label>
              <Button
                size='icon'
                variant='outline'
                onClick={() => handleDurationChange(Math.max(0, duration - 5))}
              >
                <Minus className='h-4 w-4' />
              </Button>
              <Input
                id={`duration-${workout.id}`}
                type='number'
                value={duration}
                onChange={e =>
                  handleDurationChange(parseInt(e.target.value) || 0)
                }
                className='w-16 text-center'
              />
              <Button
                size='icon'
                variant='outline'
                onClick={() => handleDurationChange(duration + 5)}
              >
                <Plus className='h-4 w-4' />
              </Button>
              <span className='text-sm text-gray-500'>min</span>
            </div>
          )}
        </div>
      </CardContent>
      <CardFooter>
        <Button onClick={() => handleComplete(workout.id)} className='w-full'>
          Complete
        </Button>
      </CardFooter>
    </Card>
  );
};
