import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
// import ProfileForm from "../components/ProfileForm"

const SignupPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const { username, password } = formData;

  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async e => {
    e.preventDefault();
    const newUser = {
      username,
      password
    };

    try {
      const config = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newUser)
      };
      const res = await fetch('http://127.0.0.1:8000/accounts/signup/', config);
      const data = await res.json();
      console.log(data);
      // Navigate to the profile page
      navigate('/profile/');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h1>Signup</h1>
      <form onSubmit={e => onSubmit(e)}>
        <input
          type="text"
          placeholder="Username"
          name="username"
          value={username}
          onChange={e => onChange(e)}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={password}
          onChange={e => onChange(e)}
        />
        <input type="submit" value="Signup" />
      </form>
    </div>
  );
};

export default SignupPage



// import React, { useState } from 'react'

// const SignupPage = () => {
//   const [formData, setFormData] = useState({
//     username: '',
//     password: ''
//   })
//   const { username, password } = formData

//   const onChange = e => {
//     setFormData({ ...formData, [e.target.name]: e.target.value })
//   }

//   const onSubmit = async e => {
//     e.preventDefault()
//     const newUser = {
//       username,
//       password
//     }

//     try {
//       const config = {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(newUser)
//       }
//       const res = await fetch('http://127.0.0.1:8000/accounts/signup/', config)
//       const data = await res.json()
//       console.log(data)
//     } catch (err) {
//       console.error(err)
//     }
//   }

//   return (
//     <div>
//       <h1>Signup</h1>
//       <form onSubmit={e => onSubmit(e)}>
//         <input
//           type="text"
//           placeholder="Username"
//           name="username"
//           value={username}
//           onChange={e => onChange(e)}
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           name="password"
//           value={password}
//           onChange={e => onChange(e)}
//         />
//         <input type="submit" value="Signup" />
//       </form>
//     </div>
//   )
// }

// export default SignupPage