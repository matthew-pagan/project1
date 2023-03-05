// import { useParams } from "react-router-dom"
import React from "react"
import { Link } from 'react-router-dom';
import ProfileForm from "../components/ProfileForm"

function ProfilePage({profiles}) {

  // const params = useParams()
  // console.log("Singe User Params", params)

    
  return (
    <div>
      <h2>Profile Page</h2>
      <hr />
      <p>The User Profile Go Here</p>
      {/* <div className="profile_breakdown">
        <p>{ answer.weights }</p>
        <p>{ answer.max_snatch }</p>
        <p>{ answer.max_cleanjerk }</p>
        <p>{ answer.frontsquat }</p>
        <p>{ answer.backsquat }</p>
      </div> */}
      <br></br>
      <br></br>
      <ProfileForm />
      <br></br>
      <br></br>
      <div>
        <Link to="/workouts">
          <button>Link to Homepage, where the workouts are</button>
          <br></br>
          <br></br>
        </Link>
      </div>
    </div>
  )
}

export default ProfilePage

