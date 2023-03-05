import React from 'react';
import { Link } from 'react-router-dom';


function StartPage() {
  
  return (
    <div>
      <h1>Bar Path Program</h1>
      <p>Please select an option:</p>
      <div>
        <Link to="/signin">
          <button>Sign In To Start</button>
          <br></br>
          <br></br>
        </Link>
        <Link to="/signup">
          <button>Create An Account</button>
        </Link>
      </div>
    </div>
  );
}

export default StartPage