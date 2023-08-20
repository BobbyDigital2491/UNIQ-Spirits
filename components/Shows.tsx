/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */
import React from 'react'

const Shows = () => {
  return (
    
    <a href="/CH91" className="group relative block bg-black">
  <img
    alt="Developer"
    src="/CH91.png"
    className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
  />

  <div className="relative p-4 sm:p-6 lg:p-8 border">
    <p className="text-sm font-medium uppercase tracking-widest text-yellow-400">
      Podcast
    </p>

    <p className="text-xl font-bold text-white sm:text-2xl">Channel 91</p>

    <div className="mt-32 sm:mt-48 lg:mt-64">
      <div
        className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
      >
        <p className="text-sm text-white">
        Welcome to Channel 91, a variety channel where you can find whatever content your&apos;e looking for. From documentaries to podcasts, comedy skits to real news. Channel 91 is the home of content.
        </p>
      </div>
    </div>
  </div>
</a>



  )
}

export default Shows
