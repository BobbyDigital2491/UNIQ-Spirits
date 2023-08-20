import React from 'react'
import Nav from '../components/Nav'
import Seo from '../components/Seo'
import Shows3 from '../components/Shows3'
import Yr86 from '../components/Yr86'
import EightySix from '../components/EightySix'
import Footer from '../components/Footer'

const Year86 = () => {
  return (
    <div className='bg-black'>
        <Seo title={"Channel 91"} 
      description={"Welcome to Channel 91, a variety channel where you can find whatever content your'e looking for. From documentaries to podcasts, comedy skits to real news. Channel 91 is the home of content."} 
      image={"public/monkey.png"} 
      url={"CH91.com"}  />
        <Nav/>
        <Shows3/>
        <Yr86/>
        <EightySix/>
        <Footer/>
      
    </div>
  )
}

export default Year86
