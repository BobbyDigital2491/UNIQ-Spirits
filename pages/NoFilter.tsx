import React from 'react'
import Seo from '../components/Seo'
import Nav from '../components/Nav'
import Shows2 from '../components/Shows2'
import NoFil from '../components/NoFil'
import Footer from '../components/Footer'
import TeamNo from '../components/TeamNo'

const NoFilter = () => {
  return (
    <div>
        <Seo title={"Channel 91"} 
      description={"Welcome to Channel 91, a variety channel where you can find whatever content your'e looking for. From documentaries to podcasts, comedy skits to real news. Channel 91 is the home of content."} 
      image={"public/monkey.png"} 
      url={"CH91.com"}  />
        <Nav/>
        <Shows2/>
        <NoFil/>
        <TeamNo/>
        <Footer/>
      
    </div>
  )
}

export default NoFilter
