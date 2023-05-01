import React from 'react'


const images = {}
function importAll(r) {
  r.keys().forEach(key => images[key] = r(key))
}
// eslint-disable-next-line no-undef
importAll(require.context('../Assets/backendPics/Produce', false, /\.(png|jpe?g|svg)$/))

// console.log('pics',images['./oranges.jpg'])



// import Image1 from '../Assets/backendPics/Produce/pexels-bruno-scramgnon-23042.jpg'
// import Image2 from '../Assets/backendPics/Produce/pexels-dids-1367232.jpg'
import Groceries from '../groceryData'

// console.log('all items',Groceries)

// const bogos = [
//   {
//     title: 'Al Fresco Ground Chicken',
//     description: 'Buy 1 Get 1 Free\nof equal or lesser price\nSave Up To $5.99\nValid 3/30 - 4/8',
//     price: 'Save Up To $5.99',
//     image: Image1
//   },
//   {
//     title: 'Arm & Hammer In-Wash Booster',
//     description: 'Buy 1 Get 1 Free\nof equal or lesser price\nValid 3/30 - 4/8',
//     price: 4.76,
//     image: Image1
//   },
//   {
//     title: 'Arm & Hammer Laundry Detergent',
//     description: 'Buy 1 Get 1 Free\nof equal or lesser price\nSave Up To $7.69\nValid 3/30 - 4/8',
//     price: 'Save Up To $7.69',
//     image: Image1
//   },
//   {
//     title: 'B.R. Cohn Cabernet Sauvignon Wine',
//     description: 'Buy 1 Get 1 Free\nof equal or lesser price\nSave Up To $25.99\nValid 3/30 - 4/8',
//     price: 'Save Up To $25.99',
//     image: Image1
//   },
//   {
//     title: 'Bertolli Sauce',
//     description: 'Buy 1 Get 1 Free\nof equal or lesser price\nSave Up To $5.45\nValid 3/30 - 4/8',
//     price: 'Save Up To $5.45',
//     image: Image2
//   },
// ]
// console.log('all items',Groceries)
// console.log('testing....',Groceries.Produce)



// console.log('all items', Groceries)



const produceItems = Groceries.Produce


const BOGOs = () => {
  return (
    <div className='p-5' style={{ height: '60vh' }}>
      <div className='flex justify-between'>
        <h2 className='text-2xl'>BOGOs</h2>
        <button className='bg-green-600 border bg-opacity-1 rounded-md text-green-900 p-2'>View all</button>
      </div>
      <div className='flex flex-row justify-start m-2 gap-10' style={{ height: '38vh' }}>
        {produceItems.map((item, index) => (
          <div className=' flex flex-col flex-1 justify-between gap-5' key={index}>
            <div className=''>
              <img className='h-32 w-32 object-fill ' src={images[`./${item.name.toLocaleLowerCase()}.jpg`]} alt={item.name} />
            </div>

            <div className='flex flex-col'>
              <strong>{item.name}</strong>
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
