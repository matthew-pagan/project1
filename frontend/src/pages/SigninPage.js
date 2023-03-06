import React, { useState } from 'react'
import axios from 'axios'
import { Routes, Route } from "react-router-dom";
import { Navigate } from 'react-router-dom'

const SigninPage = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  })
  const { username, password } = formData
  const [redirect, setRedirect] = useState(false)
  const [error, setError] = useState(null)

  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const onSubmit = async e => {
    e.preventDefault()
    const user = {
      username,
      password
    }

    try {
      const config = {
        headers: {
          'Content-Type': 'application/json'
        }
      }
      const body = JSON.stringify(user)
      const res = await axios.post('http://127.0.0.1:8000/accounts/signin/', body, config)
      localStorage.setItem('token', res.data.token)
      console.log(localStorage) //  delete when done
      setRedirect(true)
    } catch (err) {
      console.error(err)
      setError('Invalid credentials')
    }
  }

  if (redirect) {
    return <Navigate to="/create/" replace={true} />  // change navigation to /profile/ for adding data based on Profile model fields
  }

  return (
    <div>
      <h1>Please Sign In</h1>
      {error && <p>{error}</p>} 
      {/* displays error message if error state is not null */}
      <form onSubmit={e => onSubmit(e)}>
        <input
          type="text"
          placeholder="Username"
          name="username"
          value={username}
          onChange={e => onChange(e)}
        />
        <br></br>
        <br></br>
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={password}
          onChange={e => onChange(e)}
        />
        <br></br>
        <br></br>
        <input type="submit" value="Signin" />
      </form>
    </div>
  )
}

export default SigninPage
