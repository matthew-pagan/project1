import { Link } from "react-router-dom"

function ProfileList (props) {
  
  const renderProfiles = () => {
    if (!props.profiles) {
      return 'No profile exists' // change to null when done testing
    }
    
    
    return props.profiles.map((profile, index) => {
      return (
        <ul key={index}>
          <li><Link to={`../${profile.user}/`}> { profile.user }</Link></li>
        </ul>
      )
    })
  }
  
  console.log("Profiles in ProfileList", props.profiles)
  // console.log("Workouts in WorkoutList:", props.workouts);  // delete when done testing

  return (
    <div>
      <h3>Hello World</h3>
    <ul>{ renderProfiles() }</ul>
    </div>
  )
}

export default ProfileList