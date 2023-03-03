import { Link } from "react-router-dom"

function WorkoutList (props) {
  
  const renderWorkouts = () => {
    if (!props.workouts) {
      return 'Hello there is nothing' // change to 'There are no workouts yet' or null when done testing
    }
    
    
    return props.workouts.map((workout, index) => {
      return (
        <ul key={index}>
          <li><Link to={`workout/${workout.id}/`}> { workout.title }</Link></li>
        </ul>
      )
    })
  }
  
  console.log(props.workouts)
  // console.log("Workouts in WorkoutList:", props.workouts);  // delete when done testing

  return (
    <div>
      <h3>Pick the Workout</h3>
    <ul>{ renderWorkouts() }</ul>
    </div>
  )
}

export default WorkoutList