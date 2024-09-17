import React from 'react';

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const workouts = [
  { day: 'Monday', date: 'April 3', type: 'Full Body Workout' },
  { day: 'Tuesday', date: 'April 4', type: 'Upper Body Workout' },
  { day: 'Wednesday', date: 'April 5', type: 'Lower Body Workout' },
  { day: 'Thursday', date: 'April 6', type: 'Full Body Workout' },
  { day: 'Friday', date: 'April 7', type: 'Upper Body Workout' },
];

const UpcomingWorkouts = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Upcoming Workouts</CardTitle>
      </CardHeader>
      <CardContent>
        {workouts.map((workout, index) => (
          <div key={index} className="flex items-center mb-4">
            <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center mr-4">
              {workout.day.charAt(0)}
            </div>
            <div>
              <p className="font-medium">{workout.day}, {workout.date}</p>
              <p className="text-sm text-gray-500">{workout.type}</p>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}

export default UpcomingWorkouts;