import React from 'react'
import Weddingcards from './Weddingcards';
import SpaCard from './SpaCard'
import Service from './Service'
import Daily from './Daily';

const FeaturedServices = () => {
  return (
    <div className='max-w-[1400px] mx-auto flex flex-col items-center justify-center '>
      <div className='flex justify-center items-center w-full'>
      <SpaCard/>
          <Weddingcards />
      </div>
      <div className='flex justify-center items-center'> 
          <Daily/>
          <Service/>
      </div>
    </div>
  )
}

export default FeaturedServices
