/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react'
import logo from './Assets/pageImages/logo.jpg'

function LoginForm( { onClose, updateUser }) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  // const [user, setUser] = useState(null)


  const handleUsernameChange = (event) => {
    setUsername(event.target.value)
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('Submitted:', username, password)
  }

  const handleSignUp = () => {
    console.log('render sign up page and change link route')
  }

  const handleLogin = () => {
    console.log('Login:', username, password)
    updateUser(username)
    onClose()
  }

  return (

    <form className=' flex flex-col gap-3 items-center m-8' onSubmit={handleSubmit}>
      <img className='h-32 w-32 border rounded-full object-contain ' src={logo} alt='logo' />
      <h2 className='text-4xl'>Log in </h2>
      <div className=' flex flex-col rounded-md w-3/5 '>
        <p className='font-bold'>User name</p>
        <input type="text" className='border-2 rounded-md h-12 ' value={username} onChange={handleUsernameChange} />
      </div>
      <div className=' flex flex-col w-3/5 rounded-md'>
        <p className='font-bold'>Password</p>
        <input type="password" className='border-2 rounded-md h-12' value={password} onChange={handlePasswordChange} />
      </div>
      <p className='underline text-green-800'> Need help signing in? </p>
      <p><input type='checkbox' /> Keep me signed in </p>
      <button className='bg-green-700 p-2 border rounded-md text-white' onClick={handleLogin}> Log in </button>
      <p> Don't have an account?<a href='#' onClick={handleSignUp}> Sign up </a> </p>
      <p> By logging in, you agree to Publix's <a href='#'> Terms of Use </a> updated on 12/30/2022.</p>
      <p> © Publix Asset Management Company 2023. All Rights Reserved. </p>
    </form>

  )
}

export default LoginForm
