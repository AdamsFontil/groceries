import React from 'react'
import Image1 from '../Assets/backendPics/Produce/grapes.jpg'
import Image2 from '../Assets/backendPics/Produce/bananas.jpg'

const popularPlattersData = [
  {
    name: 'Boars Head Sub Selections, Large',
    description: 'Includes Lettuce and Tomato',
    notice: '24 Hours Advance Notice Required',
    price: '$69.99',
    button: 'Order',
    imageUrl: Image1
  },
  {
    name: 'Publix Deli Fresh Fruit Platter, Large',
    description: '24 Hours Advance Notice Required',
    price: '$44.99',
    button: 'Add to Cart',
    imageUrl: Image2
  },
  {
    name: 'Publix Deli Chicken Tender Box Large Hot',
    description: 'Hot',
    notice: '24 Hours Advanced Notice Required',
    price: '$59.99',
    button: 'Order',
    imageUrl: Image2
  },
  {
    name: 'Publix Deli Garden Fresh Vegetable Platter, Large',
    description: '24 Hours Advance Notice Required',
    price: '$34.99',
    button: 'Order',
    imageUrl: Image2
  },
  {
    name: 'Boars Head Classic Slider Trio, Large',
    notice: '24 Hour Notice Required',
    price: '$69.99',
    button: 'Order',
    imageUrl: Image2
  }
]

const PopularPlatters = () => {
  return (
    <div className='m-5 hidden md:block'>
      <div className='flex justify-between'>
        <h2>Popular Platters</h2>
        <button className='green-400'>View all</button>
      </div>

      <div className='flex mx-8 justify-start ' style={{ height: '' }}>
        {popularPlattersData.map((platter, index) => (
          <div className=' flex flex-col justify-evenly flex-1  gap-5' key={index}>
            <img className='w-32 object-contain' src={platter.imageUrl} alt={platter.name} />
            <div className=''>
              <p className='text-small'>{platter.name}</p>
              {platter.description && <p>{platter.description}</p>}
              {platter.notice && <p>{platter.notice}</p>}
            </div>
            <div className=''>
              <p>{platter.price}</p>
              <button className='bg-green-600 rounded-sm text-white p-1'>{platter.button}</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PopularPlatters
