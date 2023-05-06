import Quicklinks from './Components/Quicklinks'
import Header from './Components/Header'
import Body from './Components/Body'
import BeforeFooter from './Components/BeforeFooter'
import Footer from './Components/Footer'
import { useState } from 'react'
import LoginForm from './LoginForm'

function App() {
  const [user, setUser] = useState(null)
  const [showLoginForm, setShowLoginForm] = useState(false)

  const handleSignUp = () => {
    console.log('signing up')
  }

  const handleLogin = () => {
    console.log('Logging in')
    setShowLoginForm(true)
  }

  const handleLogout = () => {
    console.log('Logging out')
    setUser(null)
  }

  console.log(user, 'is logged in')

  const updateUser = (newUser) => {
    setUser(newUser)
  }

  return (
    <div className='bg-white-800'>
      {showLoginForm && (
        <LoginForm user={user} updateUser={updateUser} onClose={() => setShowLoginForm(false)} />
      )}

      {!showLoginForm && (
        <div>
          <div className='text-green-900' style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 10 }}>
            <Quicklinks />
            <Header handleLogin={handleLogin} handleSignUp={handleSignUp} handleLogout={handleLogout} user={user} location='North Miami' />
          </div>

          <div style={{ paddingTop: '30vh' }}>
            <Body />
            <BeforeFooter />
            <Footer />
          </div>
        </div>
      )}
    </div>
  )
}

export default App
