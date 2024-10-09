import {
  Dispatch,
  SetStateAction,
  useState,
} from 'react';

import {
  Minus,
  Pencil,
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
import { Exercises } from '@/gql';

type ExerciseCardProps = {
  exercise: Exercises;
  setCompletedExercises: Dispatch<SetStateAction<any[]>>;
  isComplete?:boolean;
};

export const ExerciseCard = ({
  exercise,
  isComplete,
  setCompletedExercises,
}: ExerciseCardProps) => {
  const [reps, setReps] = useState(exercise?.reps);
  const [weight, setWeight] = useState(exercise?.weight);
  const [sets, setSets] = useState(exercise?.sets);
  const [duration, setDuration] = useState(exercise?.duration);

  const handleRepsChange = (newReps: number) => {
    setReps(newReps);
  };

  const handleSetsChange = (newSets: number) => {
    setSets(newSets);
  };

  const handleDurationChange = (newDuration: number) => {
    setDuration(newDuration);
  };
  const handleWeightChange = (newWeight: number) => {
    setWeight(newWeight);
  };

  const handleCompleteExercise = () => {
    setCompletedExercises((prev:any[]) => {
      const existingExercise = prev.find(exExercise => exExercise.exercise_id === exercise.id);
      if (existingExercise) {
        existingExercise.reps = reps;
        existingExercise.sets = sets;
        existingExercise.duration = duration;
        existingExercise.weight = weight;
        return [...prev];
      } else {
        return [...prev, { exercise_id: exercise.id, reps, sets, duration, weight }];
      }
    });
  };

  const handleEditExercise = () => {
    setCompletedExercises((prev:any[]) =>
      prev.filter(ex=> ex.id!==exercise?.id)
    )
  }

  return (
    <div className="relative">
      {isComplete && <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-slate-500 rounded-full bg-opacity-20 hover:bg-opacity-60 z-30" >
          <button className="p-4 rounded-full opacity-100 pointer-events-auto" onClick={handleEditExercise}>
            <Pencil />
          </button>
        </div>}
    <Card key={exercise.id} className={`w-full md:w-auto ${isComplete? 'opacity-60':'opacity-100 bg-transparent'}`} >
      <CardHeader className='sticky md:relative top-0 bg-white'>
        <CardTitle>{exercise?.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className='space-y-2'>
          {reps && (
            <div className='flex items-center space-x-2'>
              <Label htmlFor={`reps-${exercise?.id}`} style={{ width: 80 }}>
                Reps:
              </Label>
              <Button
                size='icon'
                variant='outline'
                onClick={() => handleRepsChange(Math.max(0, reps - 1))}
                disabled={isComplete}
              >
                <Minus className='h-4 w-4' />
              </Button>
              <Input
                id={`reps-${exercise?.id}`}
                type='number'
                value={reps || 0}
                onChange={e => handleRepsChange(parseInt(e.target.value) || 0)}
                className='w-16 text-center'
                disabled={isComplete}
              />
              <Button
                size='icon'
                variant='outline'
                onClick={() => handleRepsChange(reps + 1)}
                disabled={isComplete}
              >
                <Plus className='h-4 w-4' />
              </Button>
            </div>
          )}
          {sets && (
            <div className='flex items-center space-x-2'>
              <Label htmlFor={`sets-${exercise.id}`} style={{ width: 80 }}>
                Sets:
              </Label>
              <Button
                size='icon'
                variant='outline'
                onClick={() => handleSetsChange(Math.max(0, sets - 1))}
                disabled={isComplete}
              >
                <Minus className='h-4 w-4' />
              </Button>
              <Input
                id={`sets-${exercise.id}`}
                type='number'
                value={sets || 0}
                onChange={e => handleSetsChange(parseInt(e.target.value) || 0)}
                className='w-16 text-center'
                disabled={isComplete}
              />
              <Button
                size='icon'
                variant='outline'
                onClick={() => handleSetsChange(sets + 1)}
                disabled={isComplete}
              >
                <Plus className='h-4 w-4' />
              </Button>
            </div>
          )}
          {weight && (
            <div className='flex items-center space-x-2'>
              <Label htmlFor={`weight-${exercise.id}`} style={{ width: 80 }}>
                Weight:
              </Label>
              <Button
                size='icon'
                variant='outline'
                onClick={() => handleWeightChange(Math.max(0, weight - 1))}
                disabled={isComplete}
              >
                <Minus className='h-4 w-4' />
              </Button>
              <Input
                id={`weight-${exercise.id}`}
                type='number'
                value={weight}
                onChange={e =>
                  handleWeightChange(parseInt(e.target.value) || 0)
                }
                className='w-16 text-center'
                disabled={isComplete}
              />
              <Button
                size='icon'
                variant='outline'
                onClick={() => handleWeightChange(weight + 1)}
                disabled={isComplete}
              >
                <Plus className='h-4 w-4' />
              </Button>
              <span className='text-sm text-gray-500'>kg</span>
            </div>
          )}
          {duration && (
            <div className='flex items-center space-x-2'>
              <Label htmlFor={`duration-${exercise.id}`} style={{ width: 80 }}>
                Duration:
              </Label>
              <Button
                size='icon'
                variant='outline'
                onClick={() => handleDurationChange(Math.max(0, duration - 5))}
                disabled={isComplete}
              >
                <Minus className='h-4 w-4' />
              </Button>
              <Input
                id={`duration-${exercise.id}`}
                type='number'
                value={duration}
                onChange={e =>
                  handleDurationChange(parseInt(e.target.value) || 0)
                }
                className='w-16 text-center'
                disabled={isComplete}
              />
              <Button
                size='icon'
                variant='outline'
                onClick={() => handleDurationChange(duration + 5)}
                disabled={isComplete}
              >
                <Plus className='h-4 w-4' />
              </Button>
              <span className='text-sm text-gray-500'>min</span>
            </div>
          )}
        </div>
      </CardContent>
      <CardFooter className={`${isComplete ?"invisible":""}`}>
        <Button onClick={handleCompleteExercise} className='w-full' disabled={isComplete}>
          Done
        </Button>
      </CardFooter>
    </Card>
    </div>
  );
};
