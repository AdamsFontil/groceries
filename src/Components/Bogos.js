// import React from 'react'


// const images = {}
// function importAll(r) {
//   r.keys().forEach(key => images[key] = r(key))
// }
// // eslint-disable-next-line no-undef
// importAll(require.context('../Assets/backendPics/Produce', false, /\.(png|jpe?g|svg)$/))

// // console.log('pics',images['./oranges.jpg'])



// // import Image1 from '../Assets/backendPics/Produce/pexels-bruno-scramgnon-23042.jpg'
// // import Image2 from '../Assets/backendPics/Produce/pexels-dids-1367232.jpg'
// import Groceries from '../groceryData'

// // console.log('all items',Groceries)

// // const bogos = [
// //   {
// //     title: 'Al Fresco Ground Chicken',
// //     description: 'Buy 1 Get 1 Free\nof equal or lesser price\nSave Up To $5.99\nValid 3/30 - 4/8',
// //     price: 'Save Up To $5.99',
// //     image: Image1
// //   },
// //   {
// //     title: 'Arm & Hammer In-Wash Booster',
// //     description: 'Buy 1 Get 1 Free\nof equal or lesser price\nValid 3/30 - 4/8',
// //     price: 4.76,
// //     image: Image1
// //   },
// //   {
// //     title: 'Arm & Hammer Laundry Detergent',
// //     description: 'Buy 1 Get 1 Free\nof equal or lesser price\nSave Up To $7.69\nValid 3/30 - 4/8',
// //     price: 'Save Up To $7.69',
// //     image: Image1
// //   },
// //   {
// //     title: 'B.R. Cohn Cabernet Sauvignon Wine',
// //     description: 'Buy 1 Get 1 Free\nof equal or lesser price\nSave Up To $25.99\nValid 3/30 - 4/8',
// //     price: 'Save Up To $25.99',
// //     image: Image1
// //   },
// //   {
// //     title: 'Bertolli Sauce',
// //     description: 'Buy 1 Get 1 Free\nof equal or lesser price\nSave Up To $5.45\nValid 3/30 - 4/8',
// //     price: 'Save Up To $5.45',
// //     image: Image2
// //   },
// // ]
// // console.log('all items',Groceries)
// // console.log('testing....',Groceries.Produce)



// // console.log('all items', Groceries)



// const produceItems = Groceries.Produce


// const BOGOs = () => {
//   return (
//     <div className='p-5 overflow-x-auto'>
//       <div className='flex border-2 border-green-600 justify-between'>
//         <h2 className='text-2xl'>BOGOs</h2>
//         <button className='bg-green-600 border bg-opacity-1 rounded-md text-green-900 p-2'>View all</button>
//       </div>
//       <div className='flex flex-flow justify-start m-2 gap-6 border-2 border-yellow-600 overflow-x-auto min-w-720' >
//         {produceItems.map((item, index) => (
//           <div className='flex flex-col justify-between gap-5 border-2 border-blue-600 min-w-72 ' key={index}>
//             <div className=''>
//               <img className='object-cover h-52 w-96' src={images[`./${item.name.toLocaleLowerCase()}.jpg`]} alt={item.name} />
//             </div>

//             <div className='flex flex-col'>
//               <strong>{item.name}</strong>
//               {item.price && <span>{item.price}</span>}
//             </div>
//             <div>
//               <button className='bg-green-600 my-3 flex flex-1'>Add to list</button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }

// export default BOGOs


import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const images = {}
function importAll(r) {
  r.keys().forEach(key => images[key] = r(key))
}
// eslint-disable-next-line no-undef
importAll(require.context('../Assets/backendPics/Produce', false, /\.(png|jpe?g|svg)$/))

import Groceries from '../groceryData'

const produceItems = Groceries.Produce

const BOGOs = () => {
  const settings = {
    dots: true,
    progressBar: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  }
  return (
    <div className='flex flex-col p-5 gap-5'>
      <div className='flex justify-between'>
        <h2 className='text-2xl text-gray-700'>BOGOs</h2>
        <button className='bg-green-600 border bg-opacity-1 rounded-md text-green-900 p-2'>View all</button>
      </div>
      <div className='p-4'>
        <Slider { ...settings}>
          {/* <div className='slick-arrow slick-prev'></div>
        <div className='slick-arrow slick-next'></div> */}
          {produceItems.map((item, index) => (
            <div className='flex flex-col justify-between px-2 bg-white rounded-md shadow-md' key={index}>
              <div className=''>
                <img className='object-cover h-52 w-96 rounded-t-md' src={images[`./${item.name.toLocaleLowerCase()}.jpg`]} alt={item.name} />
              </div>
              <div className='flex flex-col p-3'>
                <strong className='text-gray-800 text-lg'>{item.name}</strong>
                {item.price && <span className='text-gray-600 text-md'>{item.price}</span>}
              </div>
              <div>
                <button className='bg-green-600 text-gray-100 py-2 px-4 rounded-md'>Add to list</button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default BOGOs
