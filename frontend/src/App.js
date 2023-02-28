import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import HomePage from './pages/HomePage.js'
// import WeekPage from './pages/WeekPage.js'
// import DayPage from './pages/DayPage.js'
// import WorkoutPage from './pages/WorkoutPage.js'
// import ProfilePage from './pages/ProfilePage.js'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/workouts/*" element={<HomePage />} />
          {/* <Route exact path="/workouts/week/:week_number/" element={<WeekPage />} /> 
          <Route exact path="/workouts/week/:week_number/day/:dayID" element={<DayPage />} />
          <Route exact path="/workouts/workout/:workoutID" element={<WorkoutPage />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
