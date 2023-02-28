// import WorkoutList from "../components/WorkoutList"
import { useParams } from "react-router-dom"
import React from "react"
// import { Routes, Route } from "react-router-dom";


function WorkoutPage({workouts}) {
  
  const params = useParams()

  // console.log(params.workoutID) // workoutID for use to show only the workouts for the day being displayed
  const answer = workouts.find(workout => workout.id.toString() === params.workoutID)
  
  console.log("PARAMS", params)
  console.log(answer)
  // console.log("Individual Workout", answer);  // delete when done testing


  return (
    <div>
      <h2>Workout Page</h2>
      <hr />
      <h4>{ answer.title }</h4>
      <h4>{ answer.note }</h4>
      <h4>{ answer.sets } Sets of { answer.reps } Reps at { answer.percentage }%</h4>
    </div>
  )
}

export default WorkoutPage