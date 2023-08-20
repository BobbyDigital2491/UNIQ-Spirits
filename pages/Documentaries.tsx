import React from 'react'
import Nav from '../components/Nav'
import Seo from '../components/Seo'

const Documentaries = () => {
  return (
    <div>
        <Seo title={"Channel 91"} 
      description={"Welcome to Channel 91, a variety channel where you can find whatever content your'e looking for. From documentaries to podcasts, comedy skits to real news. Channel 91 is the home of content."} 
      image={"public/monkey.png"} 
      url={"CH91.com"}  />
        <Nav/>
      
    </div>
  )
}

export default Documentaries
