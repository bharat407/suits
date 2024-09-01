import React from 'react'
import skincare from "../../assets/skin care.jpg"

const CategoryCard = (source, text) => {
  return (
    <div>
      <img src={source} alt="" />
      <p>{text}</p>
    </div>
  )
}


const HeroHome = () => {
  return (
    <div className='max-w-[1400px] w-full'>
      <div className='slider-carousel'>
        <img src={skincare} alt="" />
      </div>
      <div className='category-card'>
        {/* <CategoryCard soruce="https://e7.pngegg.com/pngimages/259/994/png-clipart-electrician-technician-electricity-maintenance-logo-electrician-electronics-computer.png" text="Electritian"></CategoryCard> */}
      </div>
    </div>
  )
}

export default HeroHome
