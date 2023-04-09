import React from 'react'
import QuickMenu from './QuickMenu'
import Cards from './Cards'
import PopularPlatters from './PopularPlatters'
import AdCard from './AdCard'
import BOGOs from './Bogos'

const Body = () => {
  return (
    <div>
      <QuickMenu />
      <Cards />
      <PopularPlatters />
      <div className='flex flex-row justify-evenly gap-6 h-40vh'>
        <AdCard />
        <AdCard />
      </div>
      <BOGOs />
    </div>
  )
}

export default Body
