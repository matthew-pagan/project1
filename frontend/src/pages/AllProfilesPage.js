import { useState, useEffect } from "react";
import WeekAPI from "../api/WeekAPI";
import { Routes, Route } from "react-router-dom";
import ProfileList from "../components/ProfileList";
// import ProfileForm from "../components/ProfileForm"
import ProfilePage from './ProfilePage.js'


function AllProfilesPage() {
  const [profiles, setProfiles] = useState([]);  
  


  useEffect(() => {
    const getProfiles = async () => {
      const data = await WeekAPI.fetchProfiles();
      if (data) {
        setProfiles(data.result);  
      }
    };
    getProfiles();
  }, []);

  // const params = useParams()

  // console.log("All Profiles", profiles); // delete when done testing
  
 
  return (
    <div>
      {/* <ProfileForm /> */}
      <br></br>
      <br></br>
      <br></br>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <h2>Profiles Page</h2>
              <hr />
              <ProfileList profiles={profiles} />
            </div>
          }
        />
        <Route
          path="/:profileID/"
          element={<ProfilePage profiles={profiles}/>}
        />
      </Routes>
    </div>
  );
}

export default AllProfilesPage;