import { Link } from "react-router-dom"

function WorkoutList (props) {
  
  const renderWorkouts = () => {
    if (!props.workouts) {
      return 'Hello there is nothing' // change to 'There are no workouts yet' or null when done testing
    }
    
    // figure out how to list only the days of the specific week page
    return props.workouts.map((workout, index) => {
      return (
        <ul key={index}>
          <li><Link to={`workout/${workout.id}/`}> { workout.title }</Link></li>
        </ul>
      )
    })
  }
  
  console.log("Workouts in WorkoutList:", props.workouts);  // delete when done testing

  return (
    <div>
      <h3>Pick the Workout</h3>
    <ul>{ renderWorkouts() }</ul>
    </div>
  )
}

export default WorkoutList