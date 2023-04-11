import { React, useState } from 'react'
import logo from '../Assets/Dartmouth-College-Big-Green-01.jpg'
const location = 'New York'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faList, faShoppingCart, faChevronDown } from '@fortawesome/free-solid-svg-icons'


function Header() {
  const [isHoveringSavings, setIsHoveringSavings] = useState(false)
  const [isHoveringOrderAhead, setIsHoveringOrderAhead] = useState(false)

  const handleMouseEnterSavings = () => {
    setIsHoveringSavings(true)
  }

  const handleMouseLeaveSavings = () => {
    setIsHoveringSavings(false)
  }

  const handleMouseEnterOrderAhead = () => {
    setIsHoveringOrderAhead(true)
  }

  const handleMouseLeaveOrderAhead = () => {
    setIsHoveringOrderAhead(false)
  }


  return (
    <div className="grid grid-cols-3 grid-rows-2 gap-4 p-3 bg-white" style={{ gridTemplateColumns: '.3fr 5fr 3fr', height: '15vh' }}>
      <div className="col-span-1 row-span-2 flex justify-center items-center" style={{ gridRow: '1 / span 2', gridColumn: '1 / span 1' }}>
        <img src={logo} alt="Logo" className="h-16 object-contain"/>
      </div>
      <div className="mx-2 col-span-1 row-span-1 " style={{ gridColumn: '2 / span 1', gridRow: '1 / span 1' }}>
        <input
          className="border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent "
          type="text"
          placeholder="Search products and more"
          style={{ width: '50vh' }}/>
      </div>
      <div className="col-span-1 row-span-1 justify-end items-center flex" style={{ gridColumn: '3 / span 1', gridRow: '1 / span 1' }}>
        <div className="mx-2 flex items-center">
          <FontAwesomeIcon icon={faList} className="mr-2" />
          <a href="#">Shopping list</a>
        </div>
        <div className="mx-2 flex items-center">
          <FontAwesomeIcon icon={faShoppingCart} className="mr-2" />
          <a href="#">Cart</a>
        </div>
        <div className="mx-2">
          <button className="bg-green-500 text-green-800 px-4 py-2 text-lg rounded-md bg-opacity-50">Log in</button>
        </div>
        <div className="">
          <button className="bg-green-700 text-white px-4 py-2 text-lg rounded-md">Sign up</button>
        </div>
      </div>

      <div className="col-span-1 row-span-1" style={{ gridColumn: '2 / span 1', gridRow: '2 / span 1' }}>
        <div className="flex">
          <div className="mx-2 relative" onMouseEnter={handleMouseEnterSavings} onMouseLeave={handleMouseLeaveSavings}>
            <a href="#">Savings <FontAwesomeIcon icon={faChevronDown} className="ml-1 text-green-700" /></a>
            <div className={`dropdown-menu ${isHoveringSavings ? '' : 'hidden'} absolute bg-white border border-gray-300 shadow-md w-48`}>
              <ul>
                <li className="py-2 px-4 hover:bg-gray-100"><a href="#">Option 1</a></li>
                <li className="py-2 px-4 hover:bg-gray-100"><a href="#">Option 2</a></li>
                <li className="py-2 px-4 hover:bg-gray-100"><a href="#">Option 3</a></li>
              </ul>
            </div>
          </div>

          <div className="mx-2 relative" onMouseEnter={handleMouseEnterOrderAhead} onMouseLeave={handleMouseLeaveOrderAhead}>
            <a href="#">Order ahead <FontAwesomeIcon icon={faChevronDown} className="ml-1 text-green-700" /></a>
            <div className={`dropdown-menu ${isHoveringOrderAhead ? '' : 'hidden'} absolute bg-white border border-gray-300 shadow-md w-48`}>
              <ul>
                <li className="py-2 px-4 hover:bg-gray-100"><a href="#">Option 1</a></li>
                <li className="py-2 px-4 hover:bg-gray-100"><a href="#">Option 2</a></li>
                <li className="py-2 px-4 hover:bg-gray-100"><a href="#">Option 3</a></li>
              </ul>
            </div>
          </div>




          <div className="mx-2">
            <a href="#">Catering</a>
          </div>
          <div className="mx-2">
            <a href="#">Delivery &amp; curbside</a>
          </div>
          <div className="mx-2">
            <a href="#">More</a>
          </div>
        </div>

      </div>
      <div className="col-span-1 row-span-1" style={{ gridColumn: '3 / span 1', gridRow: '2 / span 1' }}>
        <p className='flex justify-end text-black'>Youre Shopping at <span className="text-green-700 mx-2 underline">{location}</span></p>

      </div>
    </div>
  )
}




export default Header
