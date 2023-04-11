import React from 'react'

import Image1 from '../Assets/backendPics/Produce/pexels-bruno-scramgnon-23042.jpg'
import Image2 from '../Assets/backendPics/Produce/pexels-dids-1367232.jpg'

const bogos = [
  {
    title: 'Al Fresco Ground Chicken',
    description: 'Buy 1 Get 1 Free\nof equal or lesser price\nSave Up To $5.99\nValid 3/30 - 4/8',
    price: 'Save Up To $5.99',
    image: Image1
  },
  {
    title: 'Arm & Hammer In-Wash Booster',
    description: 'Buy 1 Get 1 Free\nof equal or lesser price\nValid 3/30 - 4/8',
    price: 4.76,
    image: Image1
  },
  {
    title: 'Arm & Hammer Laundry Detergent',
    description: 'Buy 1 Get 1 Free\nof equal or lesser price\nSave Up To $7.69\nValid 3/30 - 4/8',
    price: 'Save Up To $7.69',
    image: Image1
  },
  {
    title: 'B.R. Cohn Cabernet Sauvignon Wine',
    description: 'Buy 1 Get 1 Free\nof equal or lesser price\nSave Up To $25.99\nValid 3/30 - 4/8',
    price: 'Save Up To $25.99',
    image: Image1
  },
  {
    title: 'Bertolli Sauce',
    description: 'Buy 1 Get 1 Free\nof equal or lesser price\nSave Up To $5.45\nValid 3/30 - 4/8',
    price: 'Save Up To $5.45',
    image: Image2
  },
]

const BOGOs = () => {
  return (
    <div className='p-5' style={{ height: '60vh' }}>
      <div className='flex justify-between'>
        <h2 className='text-2xl'>BOGOs</h2>
        <button className='bg-green-600 border bg-opacity-1 rounded-md text-green-900 p-2'>View all</button>
      </div>
      <div className='flex flex-row justify-start m-2 gap-10' style={{ height: '38vh' }}>
        {bogos.map((item, index) => (
          <div className=' flex flex-col flex-1 justify-between gap-5' key={index}>
            <div className=''>
              <img className='h-32 object-cover' src={item.image} alt={item.title} />
            </div>


            <div className='flex flex-col'>
              <strong>{item.title}</strong>
              {item.description}
              {item.price && <span>{item.price}</span>}
            </div>
            <div>
              <button className='bg-green-600 my-3 flex flex-1'>Add to list</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default BOGOs
