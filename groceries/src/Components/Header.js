import React from 'react'
import logo from '../Assets/Dartmouth-College-Big-Green-01.jpg'
const location = 'New York'

function Header() {
  return (
    <div className="grid grid-cols-3 grid-rows-2 gap-4" style={{ gridTemplateColumns: '.2fr 2fr 4fr' }}>
      <div className="col-span-1 row-span-2" style={{ gridRow: '1 / span 2', gridColumn: '1 / span 1' }}>
        <img src={logo} alt="Logo" className="h-12 w-12 object-contain"/>
      </div>
      <div className="col-span-1 row-span-1 max-w-[500px]" style={{ gridColumn: '2 / span 1', gridRow: '1 / span 1' }}>
        <div className="flex justify-right">
          <div className="mx-2">
            <input
              className="border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              type="text"
              placeholder="Search products and more"/>
          </div>
        </div>
      </div>
      <div className="col-span-1 row-span-1 flex justify-end" style={{ gridColumn: '3 / span 1', gridRow: '1 / span 1' }}>
        <div className="mx-2">
          <a href="#">Shopping list</a>
        </div>
        <div className="mx-2">
          <a href="#">Cart</a>
        </div>
        <div className="mx-2">
          <a href="#">Log in</a>
        </div>
        <div className="mx-2">
          <a href="#">Sign up</a>
        </div>
      </div>
      <div className="col-span-1 row-span-1" style={{ gridColumn: '2 / span 1', gridRow: '2 / span 1' }}>
        <div className="flex justify-end">
          <div className="mx-2">
            <a href="#">Savings</a>
          </div>
          <div className="mx-2">
            <a href="#">Order ahead</a>
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
        <p className='flex justify-end align-top'>Youre Shopping at {location}</p>
      </div>
    </div>
  )
}

export default Header
