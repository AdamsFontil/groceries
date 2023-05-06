import React from 'react'
import sale from '../Assets/pageImages/deals.jpg'
import onlineShopping from '../Assets/pageImages/onlineShopping.jpg'
import bg1 from '../Assets/pageImages/bg1.jpg'
import bg2 from '../Assets/pageImages/bg2.jpg'

const info = {
  first: {
    image: sale,
    bg: bg1,
    title: 'Savings',
    links: ['Weekly Ad', 'Digital Coupons', 'Extra Savings', 'All Deals']

  },
  second: {
    image: onlineShopping,
    bg: bg2,
    title: 'Online Shopping',
    links: ['Delivery', 'In-store Pickup', 'Curbside Pickup', 'Gift Cards']
  }
}

const AdCard = () => {
  return (
    <div className='flex md:flex-row flex-col justify-around gap-4 p-5 text-xl'>
      {Object.entries(info).map(([key, value]) => (
        <div key={key} className='relative flex items-center justify-center flex-col p-8 gap-5' >
          <div className='absolute inset-0 bg-cover bg-center bg-no-repeat' style={{ backgroundImage: `url(${value.bg})`, opacity: '.3' }} />
          <div className='relative z-1 flex flex-col items-center justify-center'>
            <img className='w-64 h-64 border rounded-full bg-white' src={value.image} alt={value.title} />
            <h2 className='text-3xl'>{value.title}</h2>
            <p>Browse BOGOs, deals, and clip coupons for items you love</p>
            <div className='text-green-800 my-4'>
              {value.links.map((link) => (
                <p className='m-2' key={link}>{link}</p>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default AdCard
