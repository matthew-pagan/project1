import { useParams } from "react-router-dom"
import React, { useState } from "react"
import { Link } from 'react-router-dom';
import UpdateProfileForm from "../components/UpdateProfileForm"


function ProfilePage({profiles}) {

  const params = useParams()
  // console.log("Singe User Params", params) // delete when done testing
  // console.log("This is profile", profiles)  // delete when done testing
  const athlete = profiles.find(profile => profile.id == params.profileID)
  
  const [showUpdateForm, setShowUpdateForm] = useState(false)

  const handleButtonClick = () => {
    setShowUpdateForm(true)
  }

  // console.log("This is athlete", athlete)  // delete when done testing
  return (
    <div>
      <br></br>
      <h2>Bar Path Program</h2>
      <hr />
      <br></br>
      <h4>Hello Athlete { athlete.id }!</h4>
      <br></br>
      <p>These are your current 1 rep maxes:</p>
      <div className="profile_breakdown">
        <p>Snatch: {athlete.weights === 1 ? `${athlete.max_snatch} LB` : `${athlete.max_snatch} KG`}</p>
        <p>Clean & Jerk: {athlete.weights === 1 ? `${athlete.max_cleanjerk} LB` : `${athlete.max_snatch} KG`}</p>
        <p>Front Squat: {athlete.weights === 1 ? `${athlete.frontsquat} LB` : `${athlete.max_snatch} KG`}</p>
        <p>Back Squat: {athlete.weights === 1 ? `${athlete.backsquat} LB` : `${athlete.max_snatch} KG`}</p>
      </div>
      <div>
        <br></br>
        <Link to="/workouts">
          <button className='btn btn-primary btn-sm'>Go to Workouts</button>
          <br></br>
          <br></br>
        </Link>
      </div>
      <div>
      <button className='btn btn-secondary btn-sm' onClick={handleButtonClick}>Update Maxes First</button>
      {showUpdateForm && <UpdateProfileForm profile={athlete}/>}
      </div>
      <br></br>
      <br></br>
      
    </div>
  )
}

export default ProfilePage





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
//         <p>
//           <p>{ athlete.weights }</p>
//           <p>Snatch: { athlete.max_snatch }</p>
//           <p>Clean & Jerk: { athlete.max_cleanjerk }</p>
//           <p>Front Squat: { athlete.frontsquat }</p>
//           <p>Back Squat: { athlete.backsquat }</p>
//           </p>
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

