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
  <ul>
    {menus.map(menu => (
      <li key={menu}>{menu}</li>
    ))}
  </ul>
)



export default QuickMenu
