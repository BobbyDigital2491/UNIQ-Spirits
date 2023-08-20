/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Nav from '../components/Nav'
import Seo from '../components/Seo'
import Videos from '../components/Videos'
import Footer from '../components/Footer'

const video = () => {
  return (
    <div className='bg-black'>
        <Seo title={"Channel 91"} 
      description={"Welcome to Channel 91, a variety channel where you can find whatever content your'e looking for. From documentaries to podcasts, comedy skits to real news. Channel 91 is the home of content."} 
      image={"public/monkey.png"} 
      url={"CH91.com"}  />
        <Nav/>
        
        
        <Videos/>
        <Footer/>
      
    </div>
  )
}

export default video
