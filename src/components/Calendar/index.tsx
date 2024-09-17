import React from 'react';

import { Calendar } from '@/components/ui/calendar';

const WorkoutCalendar = () => {
  const [date, setDate] = React.useState<Date | undefined>(new Date())

  return (
    <div className="lg:p-4 flex-grow sm:p-0">
      <h2 className="text-2xl font-bold mb-4">Calendar</h2>
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border lg:w-auto sm:w-full"
      />
    </div>
  )
}

export default WorkoutCalendar;