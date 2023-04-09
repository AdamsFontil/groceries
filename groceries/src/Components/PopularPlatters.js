import React from 'react'

const popularPlattersData = [
  {
    name: 'Boars Head Sub Selections, Large',
    description: 'Includes Lettuce and Tomato',
    notice: '24 Hours Advance Notice Required',
    price: '$69.99',
    button: 'Order'
  },
  {
    name: 'Publix Deli Fresh Fruit Platter, Large',
    description: '24 Hours Advance Notice Required',
    price: '$44.99',
    button: 'Add to Cart'
  },
  {
    name: 'Publix Deli Chicken Tender Box Large Hot',
    description: 'Hot',
    notice: '24 Hours Advanced Notice Required',
    price: '$59.99',
    button: 'Order'
  },
  {
    name: 'Publix Deli Garden Fresh Vegetable Platter, Large',
    description: '24 Hours Advance Notice Required',
    price: '$34.99',
    button: 'Order'
  },
  {
    name: 'Boars Head Classic Slider Trio, Large',
    notice: '24 Hour Notice Required',
    price: '$69.99',
    button: 'Order'
  }
]

const PopularPlatters = () => {
  return (
    <div>
      <div className='flex justify-between'>
        <h2>Popular Platters</h2>
        <button className='green-400'>View all</button>
      </div>

      <ul className='flex flex-row justify-center' style={{ height: '38vh' }}>
        {popularPlattersData.map((platter, index) => (
          <li className=' border-2 items-center' key={index}>
            <p>{platter.name}</p>
            {platter.description && <p>{platter.description}</p>}
            {platter.notice && <p>{platter.notice}</p>}
            <p>{platter.price}</p>
            <button>{platter.button}</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default PopularPlatters
