import React from "react";
import { data as exercisesData } from "../../database/exercises";
import DisplayExercise from "../common/displayActivity/exercice/displayExercise";
import DisplaySummary from "../common/displayActivity/summary/displaySummary";

function ExercisePage({ state, handles }) {
  var exercises = exercisesData;
  var id = state.exercisePage.exerciseId;
  var step = state.exercisePage.step;
  var currentExercise = exercises.find((e) => {
    return e.id == id;
  });
  
  console.log(state)
  return (
    <main>
      <DisplaySummary
        name={`${id} ${": "} ${state.exercisePage.exerciseId}`}
        summary={currentExercise.summary}
      />
      <DisplayExercise
        exercise={currentExercise}
        step={step}
        handles={handles}
      />
    </main>
  );
}
export default ExercisePage;
