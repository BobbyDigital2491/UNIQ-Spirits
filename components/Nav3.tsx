/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-html-link-for-pages */
import React from 'react'
import HamburgerMenu from './HamburgerMenu'
import SearchBar from './SearchBar'

const Nav3 = () => {
  return (
    <div>
        <header>
    <div className="bg-black border-b border-gray-100">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
            <div className="flex items-center justify-between h-16 lg:h-[72px]">
                <HamburgerMenu/>

                <div className="flex items-center flex-shrink-0 ml-4 lg:ml-0">
                    <a href="/home" title="" className="inline-flex rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900">
                        <span className="sr-only"> Uniq logo </span>
                        <img className="w-auto h-16 rounded-full" src="UNIQ.jpg" alt="" />
                        
                    </a>
                </div>

                <div className="flex items-center justify-end ml-auto">
                    
                    <SearchBar/>
                </div>
            </div>
        </div>
    </div>
</header>
</div>
  )
}

export default Nav3