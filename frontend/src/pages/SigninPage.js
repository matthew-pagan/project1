import React, { useState } from 'react'
import axios from 'axios'
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
    return <Navigate to="/workouts" replace={true} />
  }

  return (
    <div>
      <h1>Get Token</h1>
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
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={password}
          onChange={e => onChange(e)}
        />
        <input type="submit" value="Signin" />
      </form>

      {/* <Link to="/">Go Back</Link> */}
    </div>
  )
}

export default SigninPage
