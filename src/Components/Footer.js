import React from 'react'

const Footer = () => {
  return (
    <div className='bg-gray-600 flex md:text-sm flex-col items-center gap-4 p-8 text-white md:items-start md:p-10' >
      <div className='flex gap-2 flex-col md:flex-row items-center md:gap-8 '>
        <p>Terms of Use &amp; Privacy Policy</p>
        <p className='hidden md:block'>|</p>
        <p>Healthcare Nondiscrimination</p>
        <p className='hidden md:block'>|</p>
        <p>Accessibility</p>
        <p className='hidden md:block'>|</p>
        <p>Accessibility Virginia Consumer Privacy</p>
      </div>
      <div className=' flex flex-col md:flex-row md:gap-4 items-center'>
        <p>Copyright © Publix Asset Management Company </p>
        <p>2023. All Rights Reserved</p>
      </div>
    </div>
  )
}

export default Footer
