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
      <AdCard />
      <BOGOs />
    </div>
  )
}

export default Body
