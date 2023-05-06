import React from 'react'
import customerService from '../Assets/pageImages/customerService.jpg'

function BeforeFooter() {
  return (
    <div className='flex flex-col justify-evenly bg-gray-200 p-10'>
      <div className='flex justify-around'>
        <div>
          <h2>Shop with us</h2>
          <div>
            <a href="#">Locations</a>
          </div>
          <div>
            <a href="#">Publix FAQ</a>
          </div>
          <div>
            <a href="#">Contact us</a>
          </div>
          <div>
            <a href="#">Coronavirus updates</a>
          </div>
          <div>
            <a href="#">Policies</a>
          </div>
          <div>
            <a href="#">Recalls</a>
          </div>
          <div>
            <a href="#">Apps</a>
          </div>
          <div>
            <a href="#">Club Publix membership</a>
          </div>
        </div>
        <div>

          <h2>Work with us</h2>

          <div>
            <a href="#">About Publix</a>
          </div>
          <div>
            <a href="#">Careers</a>
          </div>
          <div>
            <a href="#">Sustainability</a>
          </div>
          <div>
            <a href="#">Community</a>
          </div>
          <div>
            <a href="#">Business partners</a>
          </div>
        </div>
        <div>
          <h2>Services youll love</h2>

          <div>
            <a href="#">Special item requests</a>
          </div>
          <div>
            <a href="#">Presto! ATM</a>
          </div>
          <div>
            <a href="#">Aprons recipes</a>
          </div>
          <div>
            <a href="#">Publix Catering</a>
          </div>
          <div>
            <a href="#">Aprons Cooking School</a>
          </div>
          <div>
            <a href="#">Health &amp; wellness</a>
          </div>
          <div>
            <a href="#">Birthday celebrations</a>
          </div>
          <div>
            <a href="#">Shelf tags &amp; icons</a>
          </div>
          <div>
            <a href="#">Wedding services</a>
          </div>
        </div>
        <div>

          <h2 href="#">More ways to shop</h2>

          <div>
            <a href="#">Browse products</a>
          </div>
          <div>
            <a href="#">Publix Pharmacy</a>
          </div>
          <div>
            <a href="#">Publix Liquors</a>
          </div>
          <div>
            <a href="#">Publix GreenWise Market</a>
          </div>
          <div>
            <a href="#">Publix apparel &amp; gifts</a>
          </div>
          <div>
            <a href="#">Gift cards</a>
          </div>
          <div>
            <a href="#">Click here to contact us through email</a>
          </div>
        </div>
      </div>
      <div className='flex flex-row gap-5 mx-11'>
        <div>
          <img className='w-28 border rounded-full object-contain' src={customerService} alt='friendly customer service rep' />
        </div>
        <div className='flex flex-col justify-center text-xl'>
          <a href="#">Need help with something?</a>
          <a className='text-green-700' href="#">Store Info Contact Us</a>
        </div>

      </div>
    </div>
  )
}

export default BeforeFooter
