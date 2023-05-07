/* eslint-disable react/no-unescaped-entities */
import React from 'react'

function Quicklinks() {
  return (
    <div className='bg-green-800 flex flex-row md:justify-end'>
      <div className='flex text-xs text-white gap-1 p-2 md:hidden'>
        <p>You're shopping at </p>
        <p className='underline'>Publix at North Miami</p>
      </div>
      <div className='hidden md:block'>
        <ul className="flex">
          <li className="mx-2">
            <a href="#" className="text-white underline">Catering</a>
          </li>
          <li className="mx-2">
            <a href="#" className="text-white underline">Gift Cards</a>
          </li>
          <li className="mx-2">
            <a href="#" className="text-white underline">Order Sushi</a>
          </li>
          <li className="mx-2">
            <a href="#" className="text-white underline">Order Subs</a>
          </li>
          <li className="mx-2">
            <a href="#" className="text-white underline">Weekly Ad</a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Quicklinks
