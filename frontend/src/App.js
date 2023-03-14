import './App.css';
import 'react-bootstrap/dist/react-bootstrap.min.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage.js'
import CreateProfilePage from './pages/CreateProfilePage.js'
// import UpdateProfilePage from './pages/UpdateProfilePage.js'
import SigninPage from './pages/SigninPage.js'
import SignupPage from './pages/SignupPage.js'
import AllProfilesPage from './pages/AllProfilesPage.js'
import StartPage from './pages/StartPage.js'
import Layout from './hocs/Layout';
import Appnav from './components/Appnav';
import { Provider } from 'react-redux';

function App() {
  return (
    <div>
      <Router> 
        <Layout>
          <Routes>
            <Route exact path="/app" element={<StartPage />} />
            <Route exact path="/workouts/*" element={<HomePage />} />
            <Route exact path="/signin/" element={<SigninPage />} />
            <Route exact path="/signup/" element={<SignupPage />} />
            <Route exact path="/create/" element={<CreateProfilePage />} />
            {/* <Route exact path="/update/" element={<UpdateProfilePage />} /> */}
            <Route exact path="/profile/*" element={<AllProfilesPage />} />
            </Routes>
        </Layout>
      </Router>
    </div>
  );
}

export default App;