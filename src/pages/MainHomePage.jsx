import React from 'react'
import HeroHome from '../components/core/HeroHome'
import Navbar from '../components/common/Navbar'
import FeatureCard from '../components/core/FeatureCard'
import FeaturedServices from '../components/core/FeaturedServices'
import PopularSearches from '../components/core/PopularSearches'
import RecentActivites from '../components/core/RecentActivites'


const MainHomePage = () => {
  return (
    <React.Fragment>
        
        <HeroHome/>
        <FeatureCard/>
        <FeaturedServices/>
        <PopularSearches/>
        <RecentActivites/>    
    </React.Fragment>
  )
}

export default MainHomePage
