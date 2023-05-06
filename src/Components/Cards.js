import React from 'react'
import summer from '../Assets/pageImages/summer.jpg'
import iceCream from '../Assets/pageImages/iceCream.jpg'
import cake from '../Assets/pageImages/cake.jpg'
import sale from '../Assets/pageImages/sale.jpg'

const Cards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 sm:w-320 md:w-full p-6 md:h-variable">
      <div className='flex flex-col md:relative row-span-3 md:col-span-2 md:row-span-2 border-4 rounded-lg h-720 max-w-920'>
        <div className="w-full h-full md:h-full md:w-full bg-cover bg-center object-cover" style={{ backgroundImage: `url(${summer})`, minHeight: '320px' }}></div>
        <div className=' md:absolute left-12 bottom-5 md:border-2 rounded-md bg-white h-30 w-50 p-2 '>
          <h2 className="text-xl font-bold">All lunch. No line.</h2>
          <p className='text-xs'>Order ahead, skip the lines and</p>
          <p className='text-xs'>spend more time on the beach</p>
          <button className='bg-green-700 text-white text-sm rounded-md p-1 px-1 my-2'>Order ahead</button>
        </div>
      </div>
      <div className='flex flex-col md:flex-row md:col-span-2 md:row-span-1 border-4 rounded-lg max-w-340'>
        <div className='flex justify-center flex-1'>
          <img src={iceCream}  alt='ice Cream' className="object-cover w-320 h-32 md:w-full md:h-full" />
        </div>
        <div className='flex flex-2 flex-col p-4'>
          <h2 className="text-lg font-bold">Deal Alert: Ice Cream!</h2>
          <p className='text-xs'>All ice cream are on sale!</p>
          <p className='text-xs'>Enjoy one on the go or out in the sunshine</p>
        </div>
      </div>
      <div className=" flex border-4 rounded-lg max-w-320">
        <div className='flex flex-1 flex-col p-4'>
          <h2 className="text-lg font-bold">New Cakes are here</h2>
          <p className='text-xs'>Order 24 hours in advance</p>
        </div>
        <div className='flex flex-1'>
          <img src={cake} alt='cake' className="object-cover w-full h-full" />
        </div>
      </div>
      <div className=" flex border-4 rounded-lg max-w-320">
        <div className='flex flex-1 flex-col p-4'>
          <h2 className="text-lg font-bold">Weekly Ad Flyer</h2>
          <p className='text-xs'>Browse or skip to your favorite section</p>
        </div>
        <div className='flex flex-1'>
          <img src={sale} alt='sale' className="object-cover w-full h-full" />
        </div>
      </div>
    </div>
  )
}




export default Cards
