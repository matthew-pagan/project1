import { useState, useEffect } from "react";
import WeekAPI from "../api/WeekAPI";
import WeekList from "../components/WeekList";
// import { useParams } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import WeekPage from './WeekPage.js'

function HomePage() {
  const [weeks, setWeeks] = useState([]);  // holds all data


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
              <h2>Home Page</h2>
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
      
    </div>
  );
}

export default HomePage;
