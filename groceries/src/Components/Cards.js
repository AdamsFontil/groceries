import React from 'react'

const Cards = () => {
  return (
    <div className="grid grid-cols-3 grid-rows-2 gap-4" style={{ gridTemplateColumns: '2fr 1fr 1fr' }}>
      <div className='col-span-1 row-span-2 border' style={{ height: '80vh' }}>
        Hop in, Hop Out
      </div>
      <div className='col-span-2 row-span-1 border' style={{ height: '40vh' }}>
        Chicken tender subs are on sale! Enjoy one on the go or out in the sunshine
      </div>
      <div className="border" style={{ height: '38vh' }}>
        Easter Cakes - 24 hours advance notice required
      </div>
      <div className="border" style={{ height: '38vh' }}>
        Ham, fruit tray, and carrot cake
      </div>
    </div>
  )
}



export default Cards
