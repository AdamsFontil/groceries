import Quicklinks from './Components/Quicklinks'
import Header from './Components/Header'
import Body from './Components/Body'
import BeforeFooter from './Components/BeforeFooter'
import Footer from './Components/Footer'


function App() {
  return (
    <div className='bg-white-800'>
      <Quicklinks />
      <Header location={'North Miami'} />
      <Body />
      <BeforeFooter />
      <Footer />
    </div>

  )
}

export default App
