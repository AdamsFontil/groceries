import React from 'react'

function Quicklinks() {
  return (
    <div className='bg-green-800 flex flex-row justify-end'>
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
  )
}

export default Quicklinks
