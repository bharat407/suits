import React from 'react'

const FeatureCard = ({text,source}) => {
  return (
      <div  className=' flex flex-col justify-center bg-white h-[8rem] w-[16rem] mx-3 my-4 rounded-xl  items-center' >
        <img src={source} className='rounded-full w-[4rem] h-[4rem]' alt="" />
<p className='text-lg '>{text}</p>
      
    </div>
  )
}

export default FeatureCard 
