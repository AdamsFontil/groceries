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
  <div className='flex justify-center gap-6 p-4' style={{ height: '30vh' }}>
    {menus.map(menu => (
      <div className="w-40 h-40 flex flex-col items-center justify-center" key={menu.name}>
        <img src={menu.image} alt={menu.name} className="object-contain rounded-full border border-gray-400" style={{ width: '80%', height: '80%', objectFit: 'cover' }} />
        <div className="mt-2">
          <p>{menu.name}</p>
        </div>
      </div>
    ))}
  </div>
)





export default QuickMenu
