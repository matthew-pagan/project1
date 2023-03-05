import { useState, useEffect } from "react";
import WeekAPI from "../api/WeekAPI";
import { Routes, Route } from "react-router-dom";
import ProfileList from "../components/ProfileList";
import ProfilePage from './ProfilePage.js'


function AllProfilesPage() {
  const [profiles, setProfiles] = useState([]);  // holds all week, day, and workout data in 1 file
  


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