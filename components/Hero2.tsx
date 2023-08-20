/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-html-link-for-pages */
import React from 'react'
import H2 from './H2'

const Hero2 = () => {
  return (
    <div className="relative pt-32 overflow-hidden xl:pt-40 bg-black">
      <header className="absolute inset-x-0 top-0 z-10 py-8 xl:py-12 bg-transparent">
          <div className="px-6 mx-auto sm:px-8 lg:px-12 max-w-7xl">
              <div className="flex items-center justify-between">
                  <div className="flex flex-shrink-0">
                      <a href="/home" title="U'NiQ Spirits" className="inline-flex outline-none ring-2 ring-offset-secondary rounded-full ring-white ">
                          <img className="w-auto h-20 rounded-full" src="/UNIQ.jpg" alt="U'NiQ Spirits" />
                      </a>
                  </div>
  
                  <div className="md:hidden">
                      <H2/>
                  </div>
  
                  <div className="hidden md:flex md:items-center md:space-x-10 lg:ml-28">
                      
  
                      <a href="/Shop" title="" className="font-sans text-base font-normal transition-all duration-200 rounded text-white focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-primary focus:ring-offset-secondary"> Products </a>
  
                      <a href="#" title="" className="font-sans text-base font-normal transition-all duration-200 rounded text-white focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-primary focus:ring-offset-secondary"> Contact Us </a>
                  </div>
              </div>
          </div>
      </header>
  
      <div className="relative">
          <div className="px-6 mx-auto sm:px-8 lg:px-12 max-w-7xl">
              <div className="text-left md:max-w-xl md:mx-auto md:text-center">
                  <h1 className="tracking-tighter text-white">
                      <span className="font-sans font-normal text-6xl md:text-7xl">Sign Up For Our</span><br />
                      <span className="font-serif italic font-normal text-6xl md:text-8xl text-transparent bg-clip-text bg-gradient-to-br from-yellow-300 to-yellow-900">
                        News<span className="text-red-500">Letter</span>
                        </span>
                  </h1>
                  <p className="mt-5 font-sans text-base font-normal leading-7 text-white text-opacity-70">
                  Stay in the loop with U&apos;NiQ Spirits! Subscribe to our newsletter and elevate your wine journey. Receive firsthand updates on new wine releases, expert recommendations, delightful food pairings, and irresistible offers. Embrace the art of wine with us and savor every sip.</p>
  
                  
              </div>
          </div>
      </div>
  
      <div className="relative max-w-5xl px-6 mx-auto mt-12 -mb-8 group sm:px-8 lg:px-12 sm:-mb-24 lg:-mb-36 xl:-mb-40">
          <div className="overflow-hidden rounded-md aspect-w-4 aspect-h-3 lg:aspect-w-16 lg:aspect-h-9">
              
<video src="https://bafybeighfpc2rgmah22mq5imhnt6fw573fkuyjoc5aryfap6tzwc6ws3jq.ipfs.dweb.link/UNIQAD.mp4" className="w-full" 
 controls
 autoPlay
        loop
        muted>
   
  Your browser does not support the video tag.
</video>

          </div>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
             
          </div>
      </div>
  </div>
  )
}

export default Hero2