import Quicklinks from './Components/Quicklinks'
import Header from './Components/Header'
import Body from './Components/Body'
import BeforeFooter from './Components/BeforeFooter'
import Footer from './Components/Footer'


function App() {
  return (
    <div className='bg-white-800'>
      <div className='text-green-900' style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex:10 }}>
        <Quicklinks />
        <Header location={'North Miami'} />
      </div>
      <div style={{ paddingTop: '20vh' }}>
        <Body />
        <BeforeFooter />
        <Footer />
      </div>
    </div>
  )
}

export default App
