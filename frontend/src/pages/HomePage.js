import { useState, useEffect } from "react";
import WeekAPI from "../api/WeekAPI";
import WeekList from "../components/WeekList";
import Signout from "../components/Signout";
// import { useParams } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import WeekPage from './WeekPage.js'
import { Link } from "react-router-dom"


function HomePage() {
  const [weeks, setWeeks] = useState([]);  // holds all week, day, and workout data in 1 file
  


  useEffect(() => {
    const getWeeks = async () => {
      const data = await WeekAPI.fetchWeeks();
      if (data) {
        setWeeks(data.result);  
      }
    };
    getWeeks();
  }, []);

  // const params = useParams()

  // console.log("Homepage", weeks); // delete when done testing
  
 
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <br></br>
              <h2>Bar Path Program</h2>
              <hr />
              <WeekList weeks={weeks} />
            </div>
          }
        />
        <Route
          path="/week/:week_number/*"
          element={<WeekPage weeks={weeks}/>}
        />
      </Routes>
      <br></br>
      <br></br>
      <Link to='/app' text="signout"><Signout /></Link>
    </div>
  );
}

export default HomePage;