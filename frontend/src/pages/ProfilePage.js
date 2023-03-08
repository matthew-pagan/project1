import { useParams } from "react-router-dom"
import React, { useState } from "react"
import { Link } from 'react-router-dom';
import UpdateProfileForm from "../components/UpdateProfileForm"



function ProfilePage({profiles}) {

  const params = useParams()
  
  const athlete = profiles.find(profile => profile.id === Number(params.profileID))
  // console.log("Params ID", params.profileID)  // delete when done testing
  
  const [showUpdateForm, setShowUpdateForm] = useState(false)

  const handleButtonClick = () => {
    setShowUpdateForm(true)
  }

  console.log("This is athlete", athlete)  // delete when done testing
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
        <p>Clean & Jerk: {athlete.weights === 1 ? `${athlete.max_cleanjerk} LB` : `${athlete.max_cleanjerk} KG`}</p>
        <p>Front Squat: {athlete.weights === 1 ? `${athlete.max_frontsquat} LB` : `${athlete.max_frontsquat} KG`}</p>
        <p>Back Squat: {athlete.weights === 1 ? `${athlete.max_backsquat} LB` : `${athlete.max_backsquat} KG`}</p>
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

export default ProfilePage;



//Revamp attempt after Shaun's assist
// import { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import UpdateProfileForm from "../components/UpdateProfileForm";
// import WeekAPI from "../api/WeekAPI";
// import { Link } from 'react-router-dom';

// function ProfilePage() {
//   const [athlete, setAthlete] = useState(null);
//   const [showUpdateForm, setShowUpdateForm] = useState(false);
//   const { profileID } = useParams();

//   useEffect(() => {
//     const fetchAthlete = async () => {
//       const response = await WeekAPI.fetchProfilesByID(profileID);
//       if (response) {
//         setAthlete(response.result);
//       }
//     };
//     fetchAthlete();
//   }, [profileID]);

//   const handleButtonClick = () => {
//     setShowUpdateForm(true);
//   };
//   console.log("Erp", athlete)
//   if (!athlete) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       <br />
//       <h2>Bar Path Program</h2>
//       <hr />
//       <br />
//       <h4>Hello Athlete {athlete.id}!</h4>
//       <br />
//       <p>These are your current 1 rep maxes:</p>
//       <div className="profile_breakdown">
//         <p>
//           Snatch:{" "}
//           {athlete.weights === 1
//             ? `${athlete.max_snatch} LB`
//             : `${athlete.max_snatch} KG`}
//         </p>
//         <p>
//           Clean & Jerk:{" "}
//           {athlete.weights === 1
//             ? `${athlete.max_cleanjerk} LB`
//             : `${athlete.max_cleanjerk} KG`}
//         </p>
//         <p>
//           Front Squat:{" "}
//           {athlete.weights === 1
//             ? `${athlete.max_frontsquat} LB`
//             : `${athlete.max_frontsquat} KG`}
//         </p>
//         <p>
//           Back Squat:{" "}
//           {athlete.weights === 1
//             ? `${athlete.max_backsquat} LB`
//             : `${athlete.max_backsquat} KG`}
//         </p>
//       </div>
//       <div>
//         <br />
//         <Link to="/workouts">
//           <button className="btn btn-primary btn-sm">Go to Workouts</button>
//           <br />
//           <br />
//         </Link>
//       </div>
//       <div>
//         <button
//           className="btn btn-secondary btn-sm"
//           onClick={handleButtonClick}
//         >
//           Update Maxes First
//         </button>
//         {showUpdateForm && <UpdateProfileForm profile={athlete} />}
//       </div>
//       <br />
//       <br />
//     </div>
//   );
// }

// export default ProfilePage;


// Shaun's assist
// import { useParams } from "react-router-dom"
// import React, { useState, useEffect } from "react"
// import { Link } from 'react-router-dom';
// import UpdateProfileForm from "../components/UpdateProfileForm"
// import WeekAPI from "../api/WeekAPI";


// function ProfilePage() {

//   const params = useParams()
//   // const [profiles, setProfiles] = useState([]); 
//     // let profiles = []
//     // let athlete = 0
//   // useEffect(() => {
//   const getProfiles = async () => {
//     const data = await WeekAPI.fetchProfiles();   
//     // if (data) {
//     //   profiles = data.result 
//     //   console.log("Profiles", profiles) 
//     //   athlete = profiles.find(profile => profile.id == params.profileID)  
//     // }
//     return data.result
//   };
//   //   getProfiles();
//   // }, []);
//   const promise1 = getProfiles()
//   const profiles = promise1.then(result => result)
//   console.log("All Profiles", profiles)
//   const athlete = profiles.find(profile => profile.id == params.profileID)
//   console.log("Params ID", params)  // delete when done testing
  
//   const [showUpdateForm, setShowUpdateForm] = useState(false)

//   const handleButtonClick = () => {
//     setShowUpdateForm(true)
//   }

//   console.log("This is athlete", athlete)  // delete when done testing
//   return (
//     <div>
//       <br></br>
//       <h2>Bar Path Program</h2>
//       <hr />
//       <br></br>
//       <h4>Hello Athlete { athlete.id }!</h4>
//       <br></br>
//       <p>These are your current 1 rep maxes:</p>
//       <div className="profile_breakdown">
//         <p>Snatch: {athlete.weights === 1 ? `${athlete.max_snatch} LB` : `${athlete.max_snatch} KG`}</p>
//         <p>Clean & Jerk: {athlete.weights === 1 ? `${athlete.max_cleanjerk} LB` : `${athlete.max_cleanjerk} KG`}</p>
//         <p>Front Squat: {athlete.weights === 1 ? `${athlete.max_frontsquat} LB` : `${athlete.max_frontsquat} KG`}</p>
//         <p>Back Squat: {athlete.weights === 1 ? `${athlete.max_backsquat} LB` : `${athlete.max_backsquat} KG`}</p>
//       </div>
//       <div>
//         <br></br>
//         <Link to="/workouts">
//           <button className='btn btn-primary btn-sm'>Go to Workouts</button>
//           <br></br>
//           <br></br>
//         </Link>
//       </div>
//       <div>
//       <button className='btn btn-secondary btn-sm' onClick={handleButtonClick}>Update Maxes First</button>
//       {showUpdateForm && <UpdateProfileForm profile={athlete}/>}
//       </div>
//       <br></br>
//       <br></br>
      
//     </div>
//   )
// }

// export default ProfilePage

