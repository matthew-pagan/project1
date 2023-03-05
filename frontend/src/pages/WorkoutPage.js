// import WorkoutList from "../components/WorkoutList"
import { useParams } from "react-router-dom"
import React from "react"
import YoutubeSearch from "../components/YoutubeSearch"

function WorkoutPage({workouts}) {
  
  const params = useParams()
  console.log("Workout Params", params)  // delete when done testing
  // console.log(params.workoutID)  // delete when done.  workoutID for use to show only the workouts for the day being displayed
  const exercise = workouts.find(workout => workout.id.toString() === params.workoutID)
  
  return (
    <div>
      <h2>Workout Page</h2>
      <hr />
      <h4>{ exercise.title }</h4>
      <div className="workout_breakdown">
        {exercise.note && <p>{ exercise.note }</p>}
        {exercise.sets && <p>{ exercise.sets } sets</p>}
        {exercise.reps && <p>{ exercise.reps } reps</p>}
        {exercise.percentage && <p>{ exercise.percentage }%</p>}
      </div>
      <YoutubeSearch defaultQuery={exercise.title} />
    </div>
  )
}

export default WorkoutPage