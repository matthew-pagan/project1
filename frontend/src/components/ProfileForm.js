import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const ProfileForm = () => {
  const [formData, setFormData] = useState({
    user: '',
    weights: '',
    max_snatch: '',
    max_cleanjerk: '',
    max_frontsquat: '',
    max_backsquat: '',
  });

  // const [profileExist, setProfileExist] = useState(false);
  // const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  
  const navigate = useNavigate();

  const { user, weights, max_snatch, max_cleanjerk, max_frontsquat, max_backsquat } = formData;

  
  const fetchUsers = async () => {
    const token = localStorage.getItem("token");
    try {
      const response = await axios.get('http://127.0.0.1:8000/workouts/profile/', {
        headers: {
          Authorization: `Token ${token}`,
        },
      });

      const userIndex = (Math.max(...response.data.result.map(item => item.user)))
      console.log("This is user # ", userIndex) // delete when done, for testing only
      
      setFormData({
        ...formData, user: userIndex,
        // user: response.data.result[userIndex].user + 1,  
      });
    } catch (err) {
      console.log(err);
    }
  };

  const fetchProfile = async () => {
    const token = localStorage.getItem("token");
    try {
      const response = await axios.get(`http://127.0.0.1:8000/workouts/profile/`, {
        headers: {
          Authorization: `Token ${token}`,
        },
      });
      console.log(response, "This is response")

    } catch (err) {
      console.log(err);
    }
  };


  useEffect(() => {
    fetchUsers();
    fetchProfile();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: Number(e.target.value) });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData); // add this line
    const token = localStorage.getItem("token")
    try {
      await axios.post('http://127.0.0.1:8000/workouts/profile/', formData, {
        headers: {
          Authorization: 'Token ' + token 
        },
      })
      setFormData({
        user: formData.user,
        weights: '',
        max_snatch: '',
        max_cleanjerk: '',
        max_frontsquat: '',
        max_backsquat: '',
      });
      alert('Profile has been created');
      setSubmitted(true)
      navigate('/workouts/' ); 
    } catch (err) {
      console.log(err.response.data);
    }
  };


  console.log("Hello ", formData.user)
  if (submitted) {
    navigate('/workouts/' ); 
    // navigate('/profile/' + user + '/'); // goes to the individual's profile page
  }

  return (
    <div className='container'>
      <h3>Create Your Profile</h3>
      <br></br>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label>Weight Unit:</label>
          <select name='weights' value={weights} onChange={handleChange} className='form-control'>
            <option value=''>--Please choose your preferred weight system--</option>
            <option value='1'>English -- LBs</option>
            <option value='2'>Metric -- KGs</option>
          </select>
        </div>
        <div className='form-group'>
          <label>Max Snatch:</label>
          <input type='number' name='max_snatch' value={max_snatch} onChange={handleChange} className='form-control' />
        </div>
        <div className='form-group'>
          <label>Max Clean &amp; Jerk:</label>
          <input type='number' name='max_cleanjerk' value={max_cleanjerk} onChange={handleChange} className='form-control' />
        </div>
        <div className='form-group'>
          <label>Max Front Squat:</label>
          <input type='number' name='max_frontsquat' value={max_frontsquat} onChange={handleChange} className='form-control' />
        </div>
        <div className='form-group'>
          <label>Max Back Squat:</label>
          <input type='number' name='max_backsquat' value={max_backsquat} onChange={handleChange} className='form-control' />
        </div>
        {/* <div className='form-group'>
          <label>User:</label>
          <input type='text' name='user' value={user} onChange={handleChange} className='form-control' />
          {errors.user && <span className='text-danger'>{errors.user}</span>}
        </div> */}
        <br></br>
        <br></br>
        <div className='form-group'>
        <button type='submit' className='btn btn-primary btn-sm' onClick={handleSubmit}>Submit</button>

        </div>
      </form>
    </div>
  );
}

  export default ProfileForm












// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

// const ProfileForm = () => {
//   const [formData, setFormData] = useState({
//     user: '',
//     weights: '',
//     max_snatch: '',
//     max_cleanjerk: '',
//     max_frontsquat: '',
//     max_backsquat: '',
//   });

//   const [profileExist, setProfileExist] = useState(false);
//   const [errors, setErrors] = useState({});
//   const [submitted, setSubmitted] = useState(false);
  
//   const navigate = useNavigate();

//   const { user, weights, max_snatch, max_cleanjerk, max_frontsquat, max_backsquat } = formData;

  
//   const fetchUsers = async () => {
//     const token = localStorage.getItem("token");
//     try {
//       const response = await axios.get('http://127.0.0.1:8000/workouts/profile/', {
//         headers: {
//           Authorization: `Token ${token}`,
//         },
//       });

//       const userIndex = (Math.max(...response.data.result.map(item => item.user)))
//       console.log("This is user # ", userIndex) // delete when done, for testing only
      
//       setFormData({
//         ...formData, user: userIndex,
//         // user: response.data.result[userIndex].user + 1,  
//       });
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   const fetchProfile = async () => {
//     const token = localStorage.getItem("token");
//     try {
//       const response = await axios.get(`http://127.0.0.1:8000/workouts/profile/`, {
//         headers: {
//           Authorization: `Token ${token}`,
//         },
//       });
//       console.log(response, "This is response")
//       if (response.data.result !== "None Found") {
//         setProfileExist(true);}
//     } catch (err) {
//       console.log(err);
//     }
//   };
//   console.log(profileExist)

//   useEffect(() => {
//     fetchUsers();
//     fetchProfile();
//   }, []);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: Number(e.target.value) });
//   };

//   const handleSubmit = async () => {


//     const token = localStorage.getItem("token")
//     try {
//       if (profileExist) { await axios.put('http://127.0.0.1:8000/workouts/profile/', formData, {
//         headers: {
//           Authorization: 'Token ' + token 
//         },
//       })}
//       else {await axios.post('http://127.0.0.1:8000/workouts/profile/', formData, {
//         headers: {
//           Authorization: 'Token ' + token 
//         },
//       })

//       } 

//       setFormData({
//         user: formData.user,
//         weights: '',
//         max_snatch: '',
//         max_cleanjerk: '',
//         max_frontsquat: '',
//         max_backsquat: '',
//       });
//       alert('Profile has been created');
//       setSubmitted(true)
//       setErrors({});
//       // setSubmitted(true);  moved above the setErrors
//     } catch (err) {
//       console.log(err.response.data);
//     }
//   };


//   console.log("Hello ", formData.user)
//   if (submitted) {
//     navigate('/workouts/' ); 
//     // navigate('/profile/' + user + '/'); // goes to the individual's profile page
//   }

//   return (
//     <div className='container'>
//       <h3>Create Your Profile</h3>
//       <br></br>
//       <form onSubmit={handleSubmit}>
//         <div className='form-group'>
//           <label>Weight Unit:</label>
//           <select name='weights' value={weights} onChange={handleChange} className='form-control'>
//             <option value=''>--Please choose your preferred weight system--</option>
//             <option value='1'>English -- LBs</option>
//             <option value='2'>Metric -- KGs</option>
//           </select>
//         </div>
//         <div className='form-group'>
//           <label>Max Snatch:</label>
//           <input type='number' name='max_snatch' value={max_snatch} onChange={handleChange} className='form-control' />
//           {/* {errors.max_snatch && <span className='text-danger'>{errors.max_snatch}</span>} */}
//         </div>
//         <div className='form-group'>
//           <label>Max Clean &amp; Jerk:</label>
//           <input type='number' name='max_cleanjerk' value={max_cleanjerk} onChange={handleChange} className='form-control' />
//           {/* {errors.max_cleanjerk && <span className='text-danger'>{errors.max_cleanjerk}</span>} */}
//         </div>
//         <div className='form-group'>
//           <label>Max Front Squat:</label>
//           <input type='number' name='max_frontsquat' value={max_frontsquat} onChange={handleChange} className='form-control' />
//           {/* {errors.max_frontsquat && <span className='text-danger'>{errors.max_frontsquat}</span>} */}
//         </div>
//         <div className='form-group'>
//           <label>Max Back Squat:</label>
//           <input type='number' name='max_backsquat' value={max_backsquat} onChange={handleChange} className='form-control' />
//           {/* {errors.max_backsquat && <span className='text-danger'>{errors.max_backsquat}</span>} */}
//         </div>
//         {/* <div className='form-group'>
//           <label>User:</label>
//           <input type='text' name='user' value={user} onChange={handleChange} className='form-control' />
//           {errors.user && <span className='text-danger'>{errors.user}</span>}
//         </div> */}
//         <br></br>
//         <br></br>
//         <div className='form-group'>
//           <button type='submit' className='btn btn-primary btn-sm'>Submit</button>
//         </div>
//       </form>
//     </div>
//   );
// }

//   export default ProfileForm









    // e.preventDefault();
    // Validation
    // let errors = {};
    // if (!user) {
    //   errors.user = 'There is no user';
    // }
    // if (max_snatch <= 0) {
    //   errors.max_snatch = 'Max Snatch must be greater than 0';
    // }
    // if (max_cleanjerk <= 0) {
    //   errors.max_cleanjerk = 'Max Clean & Jerk must be greater than 0';
    // }
    // if (max_frontsquat <= 0) {
    //   errors.max_frontsquat = 'Max Front Squat must be greater than 0';
    // }
    // if (max_backsquat <= 0) {
    //   errors.max_backsquat = 'Max Back Squat must be greater than 0';
    // }
    // if (Object.keys(errors).length > 0) {
    //   setErrors(errors);
    //   return;
    // }


   // const fetchUsers = async () => {
  //   const token = localStorage.getItem("token")
  //   try {
  //     const response = await axios.get('http://127.0.0.1:8000/workouts/profile/', {
  //       headers: {
  //         Authorization: 'Token ' + token 
  //       }});
  //     setUsers(response.data);
  //     // Get the index of the user that matches the signed-in user's ID
  //     const userIndex = response.data.result.findIndex(user => user.user === localStorage.getItem("user"));
  //     console.log(userIndex, "this is userIndex")
  //     console.log("This", response.data) 
  //     setFormData({
  //       ...formData,
  //       user: response.data.result[userIndex].user,
  //     });
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };


  // import React, { useState, useEffect } from 'react';
  // import { useNavigate } from 'react-router-dom';
  // import axios from 'axios';
  
  // const ProfileForm = () => {
  //   const [formData, setFormData] = useState({
  //     user: null,  // Initialize to null, since we'll be fetching users from the backend
  //     weights: '',
  //     max_snatch: '',
  //     max_cleanjerk: '',
  //     max_frontsquat: '',
  //     max_backsquat: '',
  //   });
  
  //   const [users, setUsers] = useState([]);  // keeps track of available users
  //   const [errors, setErrors] = useState({});
  //   const [submitted, setSubmitted] = useState(false);
  //   const navigate = useNavigate();
  
  //   const { user, weights, max_snatch, max_cleanjerk, max_frontsquat, max_backsquat } = formData;
  
  //   const fetchUsers = async () => {
  //     const token = localStorage.getItem("token")
  //     try {
  //       const response = await axios.get('http://127.0.0.1:8000/workouts/profile/', {
  //         headers: {
  //           Authorization: 'Token ' + token 
  //         }});  // Fetch user from backend
  //       console.log(response, "This is 1st console log", response.data.result[0].user)
  //       setUsers(response.data);
  
  //       setFormData({
  //         ...formData,
  //         user: response.data.result[9].user,   
  //       });
  //       // console.log(response.data.result[user].user, "This is the user number") // delete when done, just for testing
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  
  //   useEffect(() => {
  //     fetchUsers();  // fetch users when the component mounts
  //   }, []);
  
  //   const handleChange = (e) => {
  //     setFormData({ ...formData, [e.target.name]: e.target.value });
  //   };
  
  //   const handleSubmit = async (e) => {
  //     e.preventDefault();
  //     // Validation
  //     let errors = {};
  //     if (!user) {
  //       errors.user = 'There is no user'; // check, change maybe to a dropdown of available users?
  //     }
  //     if (max_snatch <= 0) {
  //       errors.max_snatch = 'Max Snatch must be greater than 0';
  //     }
  //     if (max_cleanjerk <= 0) {
  //       errors.max_cleanjerk = 'Max Clean & Jerk must be greater than 0';
  //     }
  //     if (max_frontsquat <= 0) {
  //       errors.max_frontsquat = 'Max Front Squat must be greater than 0';
  //     }
  //     if (max_backsquat <= 0) {
  //       errors.max_backsquat = 'Max Back Squat must be greater than 0';
  //     }
  //     if (Object.keys(errors).length > 0) {
  //       setErrors(errors);
  //       return;
  //     }
  //     // Submit form data
  //     const token = localStorage.getItem("token")
  //     try {
  //       await axios.post('http://127.0.0.1:8000/workouts/profile/', formData, {
  //         headers: {
  //           Authorization: 'Token ' + token 
  //         },
  //       }) 
  //       setFormData({
  //         user: users[0].id,  // this should reset to default value after submission
  //         weights: '',
  //         max_snatch: '',
  //         max_cleanjerk: '',
  //         max_frontsquat: '',
  //         max_backsquat: '',
  //       });
  //       setErrors({});
  //       setSubmitted(true);
  //       alert('Profile has been created');
  //     } catch (err) {
  //       console.log(err.response.data);
  //     }
  //   };
    
  //   if (submitted) {
  //     navigate('/workouts/');  // this is currently the Homepage, may need to be changed
  //   }
  
    
  //   return (
  //     <div className='container'>
  //       <h3>This is the form component</h3>
  //       <form onSubmit={handleSubmit}>
  //         <div className='form-group'>
  //           <label>Weight Unit:</label>
  //           <select name='weights' value={weights} onChange={handleChange} className='form-control'>
  //             <option value=''>--Please choose your preferred weight system--</option>
  //             <option value='1'>English -- LBs</option>
  //             <option value='2'>Metric -- KGs</option>
  //           </select>
  //         </div>
  //         <div className='form-group'>
  //           <label>Max Snatch:</label>
  //           <input type='number' name='max_snatch' value={max_snatch} onChange={handleChange} className='form-control' />
  //           {/* {errors.max_snatch && <span className='text-danger'>{errors.max_snatch}</span>} */}
  //         </div>
  //         <div className='form-group'>
  //           <label>Max Clean &amp; Jerk:</label>
  //           <input type='number' name='max_cleanjerk' value={max_cleanjerk} onChange={handleChange} className='form-control' />
  //           {/* {errors.max_cleanjerk && <span className='text-danger'>{errors.max_cleanjerk}</span>} */}
  //         </div>
  //         <div className='form-group'>
  //           <label>Max Front Squat:</label>
  //           <input type='number' name='max_frontsquat' value={max_frontsquat} onChange={handleChange} className='form-control' />
  //           {/* {errors.max_frontsquat && <span className='text-danger'>{errors.max_frontsquat}</span>} */}
  //         </div>
  //         <div className='form-group'>
  //           <label>Max Back Squat:</label>
  //           <input type='number' name='max_backsquat' value={max_backsquat} onChange={handleChange} className='form-control' />
  //           {/* {errors.max_backsquat && <span className='text-danger'>{errors.max_backsquat}</span>} */}
  //         </div>
  //         <div className='form-group'>
  //           <label>User:</label>
  //           <input type='text' name='user' value={user} onChange={handleChange} className='form-control' />
  //           {errors.user && <span className='text-danger'>{errors.user}</span>}
  //         </div>
  //         <br></br>
  //         <br></br>
  //         <div className='form-group'>
  //           <button type='submit' className='btn btn-primary btn-sm'>Submit</button>
  //         </div>
  //       </form>
  //     </div>
  //   );
  // }
  
  //   export default ProfileForm