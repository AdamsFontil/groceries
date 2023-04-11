import React from 'react'
import summer from '../Assets/pageImages/summer.jpg'
import iceCream from '../Assets/pageImages/iceCream.jpg'
import cake from '../Assets/pageImages/cake.jpg'
import sale from '../Assets/pageImages/sale.jpg'

const Cards = () => {
  return (
    <div className="grid grid-cols-3 grid-rows-2 gap-4 p-6" style={{ gridTemplateColumns: '2fr 1fr 1fr' }}>
      <div className='col-span-1 row-span-2 border-4 rounded-lg' style={{ height: '60vh' }}>
        <div className='absolute left-12 bottom-5 border-2 rounded-md bg-white h-30 w-50 p-2 '>
          <h2>All lunch. No line.</h2>
          <p className='text-xs '>Order ahead, skip the lines and</p>
          <p className='text-xs '>spend more time on the beach</p>
          <button className='bg-green-700 text-white text-sm rounded-md p-1 px-1 my-2'>Order ahead</button>
        </div>

        <img src={summer} alt='fun in the sun' className="object-contain" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />

      </div>
      <div className='flex col-span-2 row-span-1 border-4 rounded-lg' style={{ height: '29vh' }}>
        <div className='flex flex-1'>
          <img src={iceCream} alt='ice Cream' className="object-contain" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
        <div className='flex flex-2 flex-col'>
          <h2>Deal Alert: Ice Cream! </h2>
          <p className='text-xs '>All ice cream are sale!</p>
          <p className='text-xs '>Enjoy one on the go or out in the sunshine</p>
        </div>

      </div>
      <div className=" flex border-4 rounded-lg" style={{ height: '29vh' }}>
        <div className='flex flex-1 flex-col'>
          <h2>New Cakes are here </h2>
          <p className='text-xs '>Order 24 Hours in advance</p>
        </div>
        <div className='flex flex-1'>
          <img src={cake} alt='cake' className="object-contain" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
      </div>
      <div className=" flex border-4 rounded-lg" style={{ height: '29vh' }}>
        <div className='flex flex-1 flex-col'>
          <h2>Weekly Ad Flyer</h2>
          <p className='text-xs '>Browse or skip to your favorite section</p>
        </div>
        <div className='flex flex-1'>
          <img src={sale} alt='sale' className="object-contain" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
      </div>
    </div>
  )
}



export default Cards
