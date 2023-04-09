import React from 'react'

const menus = [
  'Easter',
  'Subs & Wraps',
  'Cakes',
  'Catering',
  'Deli Meat & Cheese',
  'BOGOs'
]

const QuickMenu = () => (
  <ul className='flex flex-row justify-center gap-6'>
    {menus.map(menu => (
      <li className="w-40 h-40 flex items-center justify-center rounded-full border border-gray-400" key={menu}>{menu}</li>
    ))}
  </ul>
)

export default QuickMenu
