import React from 'react';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const exercises = [
  {
    name: "Bicep Curl",
    description: "Stand with your arms at your sides, holding a dumbbell in each hand with palms facing up. Bend your elbows and curl the weights up towards your shoulders, then lower back down."
  },
  {
    name: "Squats",
    description: "Stand with your feet shoulder-width apart, toes slightly turned out. Bend your knees and hips to lower your butt back and down, keeping your chest up."
  },
  {
    name: "Pushups",
    description: "Start in a high plank position with your hands shoulder-width apart. Bend your elbows to lower your chest towards the ground, then push back up."
  }
];

const ExercisesList = () => {
  return (
    <div className="lg:p-4 flex-grow sm:p-0">
      <h2 className="text-2xl font-bold mb-4">Exercises</h2>
      <Accordion type="single" collapsible>
        {exercises.map((exercise, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger>{exercise.name}</AccordionTrigger>
            <AccordionContent>{exercise.description}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}

export default ExercisesList;