import React from 'react'
import easter from '../Assets/pageImages/easter.jpg'
import subs from '../Assets/pageImages/subs.jpg'
import catering from '../Assets/pageImages/catering.jpg'
import deli from '../Assets/pageImages/deli.jpg'
import bogos from '../Assets/pageImages/sale.jpg'

const menus = [
  { name: 'Easter', image: easter },
  { name: 'Subs & Wraps', image: subs },
  { name: 'Catering', image: catering },
  { name: 'Deli Meat & Cheese', image: deli },
  { name: 'BOGOs', image: bogos }
]

const QuickMenu = () => (
  <div className='grid gap-6 p-4 grid-cols-2 md:grid-cols-4 lg:grid-cols-5 justify-center items-center'>
    {menus.map(menu => (
      <div className="flex flex-col items-center justify-center" key={menu.name}>
        <img src={menu.image} alt={menu.name} className="object-cover rounded-full border border-gray-400 h-40 w-40" />
        <div className="mt-2">
          <p>{menu.name}</p>
        </div>
      </div>
    ))}
  </div>
)

export default QuickMenu
