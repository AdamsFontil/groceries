import React from 'react'
import Image1 from '../Assets/backendPics/Produce/grapes.jpg'
import Image2 from '../Assets/backendPics/Produce/bananas.jpg'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

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
    <div className='flex-col p-5 gap-5 m-5 hidden md:flex'>
      <div className='flex justify-between'>
        <h2 className='text-2xl text-gray-700'>Popular Platters</h2>
        <button className='bg-green-600 border bg-opacity-1 rounded-md text-green-900 p-2'>View all</button>
      </div>

      <div className='flex flex-col p-4 '>
        <Slider { ...settings}>
          {popularPlattersData.map((platter, index) => (
            <div className='grid grid-cols-1 grid-rows-4 justify-end items-end rounded-md shadow-md gap-12 p-4 ' key={index}>
              <div>
                <img className='object-cover h-52 w-96 rounded-t-md' src={platter.imageUrl} alt={platter.name} />
              </div>

              <div className='flex  py-4 flex-col'>
                <p className=''>{platter.name}</p>
                {platter.description && <p>{platter.description}</p>}
                {platter.notice && <p>{platter.notice}</p>}
              </div>
              <div className='py-4'>
                <p>{platter.price}</p>
              </div>
              <div className=''>
                <button className='bg-green-600 text-gray-100 py-2 px-4 rounded-md'>{platter.button}</button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default PopularPlatters
