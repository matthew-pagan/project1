import { Link } from "react-router-dom"

function ProfileList (props) {
  
  const renderProfiles = () => {
    if (!props.profiles) {
      return 'No profile exists' // change to null when done testing
    }

    const sortedProfiles = props.profiles.sort((a, b) => a.user - b.user)
    
    return sortedProfiles.map((profile, index) => {
      return (
        <ul class="no-bullet" key={index}>
          <li><Link to={`../${profile.user}/`}>Athlete { profile.user }</Link></li>
        </ul>
      )
    })
  }
  
  // console.log("Profiles in ProfileList", props.profiles)
  // console.log("Workouts in WorkoutList:", props.workouts);  // delete when done testing

  return (
    <div>
      <h3>This part is from ProfileList.js</h3>
    <ul>{ renderProfiles() }</ul>
    </div>
  )
}

export default ProfileList