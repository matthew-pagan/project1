import { Link } from "react-router-dom"

function ProfileList (props) {
 
  
  const renderProfiles = () => {
    if (!props.profiles) {
      return 'No profile exists' // change to null when done testing
    }

    return Object.keys(props.profiles).map((key, index) => {
      // console.log(props, "chads props")
      // console.log("chads test", props.profiles)
      const profile = props.profiles[key]; 
      return (
        <ul key={index}>
          <li>
            <Link to={`../${profile.id}/`}>Athlete {profile.id}</Link>
          </li>
        </ul>
      );
    });
  };
    
  // console.log("Profiles i ProfileList", props.profile)  // delete when done testing

  return (
    <div>
      <h3>Select the Athlete</h3>
      <br></br>
      <div className="list-container">
        <p>{ renderProfiles() }</p>
      </div>
    </div>
  )
}

export default ProfileList


// import { Link } from "react-router-dom"

// function ProfileList (props) {
  
//   const renderProfiles = () => {
//     if (!props.profiles) {
//       return 'No profile exists' // change to null when done testing
//     }

//     return props.profiles.map((profile, index) => {
//       return (
//         <ul key={index}>
//           <li><Link to={`../${profile.user}/`}> { profile.user }</Link></li>
//         </ul>
//       )
//     })
//   }
    
//   console.log("Profiles in ProfileList", props.profiles)  // delete when done testing

//   return (
//     <div>
//       <h3>Select the Athlete</h3>
//       <br></br>
//       <div className="list-container">
//         <p>{ renderProfiles() }</p>
//       </div>
//     </div>
//   )
// }

// export default ProfileList




  // const sortedProfiles = props.profiles.sort((a, b) => a.user - b.user)
    
    // return sortedProfiles.map((profile, index) => {
    //   return (
    //     <div>
    //       <div key={index} >
    //         <p><Link to={`../${profile.user}/`}>Athlete { profile.user }</Link></p>
    //         </div>
    //     </div>
    //   )
    // })
  // }