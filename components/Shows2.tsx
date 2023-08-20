/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */
import React from 'react'

const Shows2 = () => {
  return (
    <div>
        <a href="/NoFilter" className="group relative block bg-black">
  <img
    alt="Podcast"
    src="/NO.jpg"
    className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
  />

  <div className="relative p-4 sm:p-6 lg:p-8">
    <p className="text-sm font-medium uppercase tracking-widest text-yellow-400">
      Podcast
    </p>

    <p className="text-xl font-bold text-white sm:text-2xl">No Filter</p>

    <div className="mt-32 sm:mt-48 lg:mt-64">
      <div
        className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
      >
        <p className="text-sm text-white">
        The No Filter Podcast is brought to you by Llama Lo3 and his various associates.
        </p>
      </div>
    </div>
  </div>
</a>  
    </div>
  )
}

export default Shows2
