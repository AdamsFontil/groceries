/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import customerService from '../Assets/pageImages/customerService.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram, faTwitter, faPinterest, faYoutube } from '@fortawesome/free-brands-svg-icons'

function BeforeFooter() {
  return (
    <div className='flex flex-col justify-evenly bg-gray-200 p-6'>
      <div className='text-4xl flex md:hidden justify-center border-b-2 border-gray-700 py-6 pb-6 gap-6'>
        <FontAwesomeIcon icon={faFacebook} className="text-gray-500" />
        <FontAwesomeIcon icon={faInstagram} className="text-gray-500" />
        <FontAwesomeIcon icon={faTwitter} className="text-gray-500" />
        <FontAwesomeIcon icon={faPinterest} className="text-gray-500" />
        <FontAwesomeIcon icon={faYoutube} className="text-gray-500" />
      </div>

      <div className='flex flex-col md:flex-row justify-between '>
        <div className='border-b-2 border-gray-500 py-6 md:border-b-0'>
          <div className='flex justify-between items-center'>
            <h2>Shop with us</h2>
            <FontAwesomeIcon icon={faPlus} className="text-green-700 md:hidden" />
          </div>
          <div className='flex-col hidden md:flex'>
            <a href="#">Locations</a>
            <a href="#">Publix FAQ</a>
            <a href="#">Contact us</a>
            <a href="#">Coronavirus updates</a>
            <a href="#">Policies</a>
            <a href="#">Recalls</a>
            <a href="#">Apps</a>
            <a href="#">Club Publix membership</a>
          </div>
        </div>
        <div className='border-b-2 border-gray-500 py-6 md:border-b-0'>
          <div className='flex justify-between items-center'>
            <h2>Work with us</h2>
            <FontAwesomeIcon icon={faPlus} className="text-green-700 md:hidden" />
          </div>
          <div className='flex-col hidden md:flex'>
            <a href="#">About Publix</a>
            <a href="#">Careers</a>
            <a href="#">Sustainability</a>
            <a href="#">Community</a>
            <a href="#">Business partners</a>
          </div>
        </div>
        <div className='border-b-2 border-gray-500 py-6 md:border-b-0'>
          <div className='flex justify-between items-center'>
            <h2>Services you'll love</h2>
            <FontAwesomeIcon icon={faPlus} className="text-green-700 md:hidden" />
          </div>
          <div className='flex-col hidden md:flex'>
            <a href="#">Special item requests</a>
            <a href="#">Presto! ATM</a>
            <a href="#">Aprons recipes</a>
            <a href="#">Publix Catering</a>
            <a href="#">Aprons Cooking School</a>
            <a href="#">Health &amp; wellness</a>
            <a href="#">Birthday celebrations</a>
            <a href="#">Shelf tags &amp; icons</a>
            <a href="#">Wedding services</a>
          </div>
        </div>
        <div className='border-b-2 border-gray-500 py-6 md:border-b-0'>
          <div className='flex justify-between items-center'>
            <h2>More ways to shop</h2>
            <FontAwesomeIcon icon={faPlus} className="text-green-700 md:hidden" />
          </div>
          <div className='flex-col hidden md:flex'>
            <a href="#">Browse products</a>
            <a href="#">Publix Pharmacy</a>
            <a href="#">Publix Liquors</a>
            <a href="#">Publix GreenWise Market</a>
            <a href="#">Publix apparel &amp; gifts</a>
            <a href="#">Gift cards</a>
            <a href="#">Contact us via email</a>
          </div>
        </div>
      </div>







      <div className='text-sm flex flex-row gap-5 pt-5'>
        <div>
          <img className='w-20 h-20 md:w-28 md:h-28 border rounded-full object-cover' src={customerService} alt='friendly customer service rep' />
        </div>
        <div className='flex flex-col text-lg gap-1 justify-center'>
          <p>Need help with something?</p>
          <div className='text-green-800 text-sm md:flex md:gap-4 md:text-lg' href="#">
            <p>Store Info</p>
            <p className='hidden md:block'>|</p>
            <p>Contact Us</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default BeforeFooter
