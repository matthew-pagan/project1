import { useParams } from "react-router-dom"
import React, { useState } from "react"
import { Link } from 'react-router-dom';
import UpdateProfileForm from "../components/UpdateProfileForm"


function ProfilePage({profiles}) {

  const params = useParams()
  // console.log("Singe User Params", params) // delete when done testing
  // console.log("This is profile", profiles)  // delete when done testing
  const athlete = profiles.find(profile => profile.user == params.profileID)
  
  const [showUpdateForm, setShowUpdateForm] = useState(false)

  const handleButtonClick = () => {
    setShowUpdateForm(true)
  }

  // console.log("This is athlete", athlete)  // delete when done testing
  return (
    <div>
      <h2>Hello Athlete { athlete.user }!</h2>
      <hr />
      <p>These are your current 1 rep maxes:</p>
      <div className="profile_breakdown">
        <ul>
          <ul>Snatch: {athlete.weights === 1 ? `${athlete.max_snatch} LB` : `${athlete.max_snatch} KG`}</ul>
          <ul>Clean & Jerk: {athlete.weights === 1 ? `${athlete.max_cleanjerk} LB` : `${athlete.max_snatch} KG`}</ul>
          <ul>Front Squat: {athlete.weights === 1 ? `${athlete.frontsquat} LB` : `${athlete.max_snatch} KG`}</ul>
          <ul>Back Squat: {athlete.weights === 1 ? `${athlete.backsquat} LB` : `${athlete.max_snatch} KG`}</ul>
          </ul>
      </div>
      <hr />
      <div>
      <button onClick={handleButtonClick}>Edit Profile</button>
      {showUpdateForm && <UpdateProfileForm profile={athlete}/>}
      </div>
      <hr />
      <br></br>
      <br></br>
      <div>
        <Link to="/workouts">
          <button className='btn btn-primary btn-sm'>Link to Homepage, where the workouts are</button>
          <br></br>
          <br></br>
        </Link>
      </div>
    </div>
  )
}

export default ProfilePage



{/* <ul>{athlete.weights === 1 ? `${athlete.max_snatch} LB` : `${athlete.max_snatch} KG`}</ul> */}


// import { useParams } from "react-router-dom"
// import React from "react"
// import { Link } from 'react-router-dom';
// // import ProfileForm from "../components/ProfileForm"
// import UpdateProfileForm from "../components/UpdateProfileForm"

// function ProfilePage({profiles}) {

//   const params = useParams()
//   // console.log("Singe User Params", params) // delete when done testing
//   // console.log("This is profile", profiles)  // delete when done testing

//   const athlete = profiles.find(profile => profile.user == params.profileID)
  

//   // console.log("This is athlete", athlete)  // delete when done testing
//   return (
//     <div>
//       <h2>Profile Page, Hello Athlete { athlete.user }!</h2>
//       <hr />
//       <p>The User Profile Goes Here</p>
//       <div className="profile_breakdown">
//         <ul>
//           <ul>{ athlete.weights }</ul>
//           <ul>Snatch: { athlete.max_snatch }</ul>
//           <ul>Clean & Jerk: { athlete.max_cleanjerk }</ul>
//           <ul>Front Squat: { athlete.frontsquat }</ul>
//           <ul>Back Squat: { athlete.backsquat }</ul>
//           </ul>
//       </div>
//       <hr />
//       <div>
//       <Link to="/update">
//           <button>Update Your Profile</button>
//           <br></br>
//           <br></br>
//         </Link>
//       </div>
//       <hr />
//       <br></br>
//       <br></br>
//       <div>
//         <Link to="/workouts">
//           <button className='btn btn-primary btn-sm'>Link to Homepage, where the workouts are</button>
//           <br></br>
//           <br></br>
//         </Link>
//       </div>
//     </div>
//   )
// }

// export default ProfilePage

