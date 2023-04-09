import React from 'react'

const bogos = [
  {
    title: 'Al Fresco Ground Chicken',
    description: 'Buy 1 Get 1 Free\nof equal or lesser price\nSave Up To $5.99\nValid 3/30 - 4/8',
    price: 'Save Up To $5.99',
  },
  {
    title: 'Arm & Hammer In-Wash Booster',
    description: 'Buy 1 Get 1 Free\nof equal or lesser price\nValid 3/30 - 4/8',
    price: null,
  },
  {
    title: 'Arm & Hammer Laundry Detergent',
    description: 'Buy 1 Get 1 Free\nof equal or lesser price\nSave Up To $7.69\nValid 3/30 - 4/8',
    price: 'Save Up To $7.69',
  },
  {
    title: 'B.R. Cohn Cabernet Sauvignon Wine',
    description: 'Buy 1 Get 1 Free\nof equal or lesser price\nSave Up To $25.99\nValid 3/30 - 4/8',
    price: 'Save Up To $25.99',
  },
  {
    title: 'Bertolli Sauce',
    description: 'Buy 1 Get 1 Free\nof equal or lesser price\nSave Up To $5.45\nValid 3/30 - 4/8',
    price: 'Save Up To $5.45',
  },
]

const BOGOs = () => {
  return (
    <div>
      <div className='flex justify-between'>
        <h2>BOGOs</h2>
        <button className='green-400'>View all</button>
      </div>
      <ul className='flex flex-row justify-center' style={{ height: '38vh' }}>
        {bogos.map((item, index) => (
          <li className=' border-2 items-center' key={index}>
            <strong>{item.title}</strong><br />
            {item.description}<br />
            {item.price && <span>{item.price}</span>}
            <button>Add to list</button>
          </li>
        ))}
      </ul>
      <button>View all</button>
    </div>
  )
}

export default BOGOs
