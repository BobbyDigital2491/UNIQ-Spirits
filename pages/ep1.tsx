import React from 'react'
import Seo from '../components/Seo'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

const ep1 = () => {
  return (
    <div>
        <Seo title={"Channel 91"} 
      description={"Welcome to Channel 91, a variety channel where you can find whatever content your'e looking for. From documentaries to podcasts, comedy skits to real news. Channel 91 is the home of content."} 
      image={"public/monkey.png"} 
      url={"CH91.com"}  />
      <Nav/>
      <video src="https://drive.google.com/file/d/15_bX5Lcw0v_Mp690pYPRocpD2gyuIwNA/view?usp=sharing"  className="w-full" controls>
        Your browser does not support the video tag.
        </video>
        <Footer/>
      
    </div>
  )
}

export default ep1
