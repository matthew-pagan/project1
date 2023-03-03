import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage.js'
import SigninPage from './pages/SigninPage.js'
import SignupPage from './pages/SignupPage.js'
import ProfilePage from './pages/ProfilePage.js'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/workouts/*" element={<HomePage />} />
          <Route exact path="/signin/" element={<SigninPage />} />
          <Route exact path="/signup/" element={<SignupPage />} />
          <Route exact path="/profile/*" element={<ProfilePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
