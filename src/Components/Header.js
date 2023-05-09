import { React, useState, useEffect } from 'react'
import logo from '../Assets/pageImages/logo.jpg'
const location = 'North Miami'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faList, faShoppingCart, faChevronDown, faBars } from '@fortawesome/free-solid-svg-icons'
import Groceries from '../groceryData'



function Header( { handleLogin, handleSignUp, user, handleLogout }) {
  const [isHoveringSavings, setIsHoveringSavings] = useState(false)
  const [isHoveringOrderAhead, setIsHoveringOrderAhead] = useState(false)
  const [searchValue, setSearchValue] = useState('')
  const [filteredGroceries, setFilteredGroceries] = useState([])
  const [showDropdown, setShowDropdown] = useState(false)

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

  function handleInputChange(event) {
    setSearchValue(event.target.value)
  }
  useEffect(() => {
    setFilteredGroceries(
      Object.keys(Groceries)
        .flatMap(key => Groceries[key])
        .filter(item => item.name.toLowerCase().includes(searchValue.toLowerCase()))
    )
  }, [searchValue])

  console.log(`filtering for ${searchValue}` ,filteredGroceries)

  const handleSearchClick = () => {
    setShowDropdown(!showDropdown)
  }

  console.log(user)




  return (
    <div>
      <div className="hidden md:grid grid-cols-3 grid-rows-2 gap-4 p-3 bg-white" style={{ gridTemplateColumns: '.3fr 4fr 3fr' }}>
        <div className="col-span-1 row-span-2 flex justify-center items-center" style={{ gridRow: '1 / span 2', gridColumn: '1 / span 1' }}>
          <img src={logo} alt="Logo" className="w-16 object-contain"/>
        </div>
        <div className="mx-2 col-span-1 row-span-1 " style={{ gridColumn: '2 / span 1', gridRow: '1 / span 1' }}>
          <input

            className="border border-gray-300 rounded-md my-1 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent "
            type="text"
            placeholder='Seach for products and more'
            value={searchValue}
            onClick={handleSearchClick}
            onChange={handleInputChange}
            style={{ width: '50vh' }}/>
          {showDropdown && (
            <div className='absolute bg-white border border-gray-300 rounded-md z-20' style={{ width: '50vh', maxheight: '30vh' }}>
              {filteredGroceries.slice(0, 10).map( (item, index) => (
                <div className='m-2 hover:bg-green-300' key={index}>
                  {item.name}
                </div>
              ))}
            </div>
          )}

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
          <div>
            {user ? (
              <div className='flex items-center'>
                <p className='mx-2'>Welcome back, {user}</p>
                <button className="bg-green-700 text-white px-4 py-2 text-lg rounded-md" onClick={handleLogout}>Log out</button>
              </div>
            ) : (
              <div className="flex">
                <div className="mx-2">
                  <button className="bg-green-500 text-green-800 px-4 py-2 text-lg rounded-md bg-opacity-50" onClick={handleLogin}>Log in</button>
                </div>
                <div className="">
                  <button className="bg-green-700 text-white px-4 py-2 text-lg rounded-md" onClick={handleSignUp}>Sign up</button>
                </div>
              </div>
            )}
          </div>
        </div>








        <div className="col-span-1 row-span-1" style={{ gridColumn: '2 / span 1', gridRow: '2 / span 1' }}>
          <div className="flex">
            <div className="mx-2 relative" onMouseEnter={handleMouseEnterSavings} onMouseLeave={handleMouseLeaveSavings}>
              <a href="#">Savings <FontAwesomeIcon icon={faChevronDown} className="ml-1 text-green-700" /></a>
              <div className={`dropdown-menu ${isHoveringSavings ? '' : 'hidden'} absolute bg-white border border-gray-300 shadow-md w-48`}>
                <div>
                  <div className="py-2 px-4 hover:bg-gray-100"><a href="#">Option 1</a></div>
                  <div className="py-2 px-4 hover:bg-gray-100"><a href="#">Option 2</a></div>
                  <div className="py-2 px-4 hover:bg-gray-100"><a href="#">Option 3</a></div>
                </div>
              </div>
            </div>


            <div className="mx-2 relative" onMouseEnter={handleMouseEnterOrderAhead} onMouseLeave={handleMouseLeaveOrderAhead}>
              <a href="#">Order ahead <FontAwesomeIcon icon={faChevronDown} className="ml-1 text-green-700" /></a>
              <div className={`dropdown-menu ${isHoveringOrderAhead ? '' : 'hidden'} absolute bg-white border border-gray-300 shadow-md w-48`}>
                <ul>
                  <div className="py-2 px-4 hover:bg-gray-100"><a href="#">Option 4</a></div>
                  <div className="py-2 px-4 hover:bg-gray-100"><a href="#">Option 5</a></div>
                  <div className="py-2 px-4 hover:bg-gray-100"><a href="#">Option 6</a></div>
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
      <div className='flex flex-col md:hidden text-lg bg-white gap-4 text-green-900 p-6 w-screen'>
        <div className='grid grid-cols-4 text-2xl gap-4'>
          <div className='flex gap-2 items-center col-span-1'>
            <img className='h-12 w-12' src={logo}></img>
            <FontAwesomeIcon icon={faBars} className="" />
          </div>
          <div className='flex items-center col-span-2'>
            {/* <FontAwesomeIcon icon={faBars} className="" /> */}
            <h2 className=''>Menu</h2>
          </div>
          <div className='flex gap-4 items-center justify-start col-span-1'>
            <FontAwesomeIcon icon={faList} className="" />
            <FontAwesomeIcon icon={faShoppingCart} className="" />
          </div>
          <div className='text-md col-span-5'>
            <input
              className="border text-sm border-gray-300 rounded-md h-12 w-full focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent "
              type="text"
              placeholder='Seach for products and more'
              value={searchValue}
              onClick={handleSearchClick}
              onChange={handleInputChange}
            />
            {showDropdown && (
              <div className='absolute bg-white border border-gray-300 rounded-md z-20' style={{ width: '50vh', maxheight: '30vh' }}>
                {filteredGroceries.slice(0, 10).map( (item, index) => (
                  <div className='m-2 hover:bg-green-300' key={index}>
                    {item.name}
                  </div>
                ))}
              </div>
            )}

          </div>
        </div>

      </div>
    </div>

  )
}




export default Header
