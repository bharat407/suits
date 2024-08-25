import React from 'react'

const FeatureCard = (source,text) => {
  return (
    <div className=' flex flex-col justify-center items-center' >
        <img src={source} className='rounded-full' alt="" />
<p className='text-lg'>{text}</p>
      
    </div>
  )
}

export default FeatureCard 
