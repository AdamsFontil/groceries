import React from 'react'

const Footer = () => {
  return (
    <div className='bg-gray-600 flex flex-col gap-6 text-white justify-center pl-20' style={{ height: '18vh' }}>
      <div className='flex items-center gap-12 '>
        <p>Terms of Use &amp; Privacy Policy</p>
        <p>Healthcare Nondiscrimination</p>
        <p>Accessibility</p>
        <p>Accessibility Virginia Consumer Privacy</p>
      </div>
      <div className='flex items-center'>
        <p>Copyright © Publix Asset Management Company 2023. All Rights Reserved</p>
      </div>
    </div>
  )
}

export default Footer
