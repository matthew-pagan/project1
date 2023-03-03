import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"

const ProfileForm = () => {
  const [formData, setFormData] = useState({
    weights: '',
    max_snatch: '',
    max_cleanjerk: '',
    max_frontsquat: '',
    max_backsquat: ''
  });

  const [errors, setErrors] = useState({});

  const { weights, max_snatch, max_cleanjerk, max_frontsquat, max_backsquat } = formData;

  const [submitted, setSubmitted] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Validation
    let errors = {};
    if (max_snatch <= 0) {
      errors.max_snatch = 'Max Snatch must be greater than 0';
    }
    if (max_cleanjerk <= 0) {
      errors.max_cleanjerk = 'Max Clean & Jerk must be greater than 0';
    }
    if (max_frontsquat <= 0) {
      errors.max_frontsquat = 'Max Front Squat must be greater than 0';
    }
    if (max_backsquat <= 0) {
      errors.max_backsquat = 'Max Back Squat must be greater than 0';
    }
    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }
    // Submit form data
    try {
      await axios.post('http://127.0.0.1:8000/workouts/profile/', formData); 
      setFormData({
        weights: '',
        max_snatch: '',
        max_cleanjerk: '',
        max_frontsquat: '',
        max_backsquat: ''
      });
      setErrors({});
      setSubmitted(true)
      alert('Profile created successfully!');
    } catch (err) {
      console.log(err.response.data);
    }
  };

  if (submitted) {
    navigate('/workouts/');
  }

  return (
    <div className="container">
      <h1>Create Your Profile</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Weight Unit:</label>
          <select name="weights" value={weights} onChange={handleChange} className="form-control">
            <option value="">--Please choose your preferred weight system--</option>
            <option value="1">English -- LBs</option>
            <option value="2">Metric -- KGs</option>
          </select>
        </div>
        <div className="form-group">
          <label>Max Snatch:</label>
          <input type="number" name="max_snatch" value={max_snatch} onChange={handleChange} className="form-control" />
          {errors.max_snatch && <span className="text-danger">{errors.max_snatch}</span>}
        </div>
        <div className="form-group">
          <label>Max Clean &amp; Jerk:</label>
          <input type="number" name="max_cleanjerk" value={max_cleanjerk} onChange={handleChange} className="form-control" />
          {errors.max_cleanjerk && <span className="text-danger">{errors.max_cleanjerk}</span>}
        </div>
        <div className="form-group">
          <label>Max Front Squat:</label>
          <input type="number" name="max_frontsquat" value={max_frontsquat} onChange={handleChange} className="form-control" />
          {errors.max_frontsquat && <span className="text-danger">{errors.max_frontsquat}</span>}
        </div>
        <div className="form-group">
          <label>Max Back Squat:</label>
          <input type="number" name="max_backsquat" value={max_backsquat} onChange={handleChange} className="form-control" />
          {errors.max_backsquat && <span className="text-danger">{errors.max_backsquat}</span>}
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
  }

  export default ProfileForm
  





















// import React, { useState } from 'react';
// import axios from 'axios';

// const ProfileForm = ({ user }) => {
//   const [formData, setFormData] = useState({
//     weights: 1,
//     max_snatch: null,
//     max_cleanjerk: null,
//     max_frontsquat: null,
//     max_backsquat: null
//   });

//   const { weights, max_snatch, max_cleanjerk, max_frontsquat, max_backsquat } = formData;

//   const handleChange = e => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async e => {
//     e.preventDefault();
//     const form = new FormData();
//     form.append('weights', weights);
//     form.append('max_snatch', max_snatch);
//     form.append('max_cleanjerk', max_cleanjerk);
//     form.append('max_frontsquat', max_frontsquat);
//     form.append('max_backsquat', max_backsquat);
//     try {
//       const res = await axios.post(`/api/profiles/${user.id}/`, form);
//       console.log(res.data);
//       // Do something with the response, like redirect to the user's profile page
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label htmlFor="weights">Weight Units:</label>
//       <select id="weights" name="weights" value={weights} onChange={handleChange}>
//         <option value="1">LB</option>
//         <option value="2">KG</option>
//       </select>
//       <br />
//       <label htmlFor="max_snatch">Max Snatch:</label>
//       <input type="number" id="max_snatch" name="max_snatch" value={max_snatch} onChange={handleChange} />
//       <br />
//       <label htmlFor="max_cleanjerk">Max Clean and Jerk:</label>
//       <input type="number" id="max_cleanjerk" name="max_cleanjerk" value={max_cleanjerk} onChange={handleChange} />
//       <br />
//       <label htmlFor="max_frontsquat">Max Front Squat:</label>
//       <input type="number" id="max_frontsquat" name="max_frontsquat" value={max_frontsquat} onChange={handleChange} />
//       <br />
//       <label htmlFor="max_backsquat">Max Back Squat:</label>
//       <input type="number" id="max_backsquat" name="max_backsquat" value={max_backsquat} onChange={handleChange} />
//       <br />
//       <button type="submit">Save Profile</button>
//     </form>
//   );
// };

// export default ProfileForm;
