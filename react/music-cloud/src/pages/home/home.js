import React, { memo } from 'react';
import NavBar from '@/components/navBar/navBar';
import { HomeWrapper } from './homeStyle';
import HomeCarousel from './c-pages/homeCarousel/homeCarousel';
import HomeColumn from './c-pages/homeColumn/homeColumn';


export default memo(function Home() {
  
  // redux hooks

  // other hooks


  return (
    <HomeWrapper className="home" >
      <div className="g-navbar">
        <NavBar title="第一高考" noBackBottom />
      </div>
      <div className="page-content">
        <HomeCarousel/>
        <HomeColumn/>
      </div>
    </HomeWrapper>
  )
})
