// import WorkoutList from "../components/WorkoutList"
import { useParams } from "react-router-dom"
import React from "react"
// import { Routes, Route } from "react-router-dom";



function WorkoutPage({workouts}) {
  
  const params = useParams()
  console.log(workouts)
  console.log(params.workoutID)
  // console.log(params.workoutID) // workoutID for use to show only the workouts for the day being displayed
  const answer = workouts.find(workout => workout.id.toString() === params.workoutID)
  
  // console.log("PARAMS", params)  // delete when done testing
  // console.log(workout_move)  // delete when done testing
  // console.log("Individual Workout", answer);  // delete when done testing


  return (
    <div>
      <h2>Workout Page</h2>
      <hr />
      <h4>{ answer.title }</h4>
      <div className="workout_breakdown">
        {answer.note && <p>{ answer.note }</p>}
        {answer.sets && <p>{ answer.sets } sets</p>}
        {answer.reps && <p>{ answer.reps } reps</p>}
        {answer.percentage && <p>{ answer.percentage }%</p>}
      </div>
    </div>
  )
}

export default WorkoutPage