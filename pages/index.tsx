/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/link-passhref */
import Link from 'next/link';
import * as React from 'react';
import Seo from '../components/Seo';

export default function Index() {
  return (
      
      <main className="flex justify-center items-center w-full h-full">
        <Seo title={"U'NiQ Spirits"} 
      description={"At U’NiQ, we believe that every sip should be an adventure, and we are dedicated to delivering excellence in every bottle."} 
      image={"public/UNIQ.png"} 
      url={"drinkuniq.com"}  />
        <section className='flex justify-center items-center w-full'>
          <div className=' flex flex-col text-3xl justify-center font-bold items-center min-h-screen text-center'>
          
          <video
        className='object-cover h-full w-full absolute -z-10'
        src="https://bafybeighfpc2rgmah22mq5imhnt6fw573fkuyjoc5aryfap6tzwc6ws3jq.ipfs.dweb.link/UNIQAD.mp4"
        autoPlay
        loop
        muted
      />
            <p className='mt-[1rem] text-lg'>
              
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
              <a href="/home" className='animate-pulse'>
                <span className='bg-red-600 p-2 hover:bg-black hover:text-yellow-400 text-black/70 rounded font-bold shadow-xl'>
                Enter Site
                </span>
              </a>
            </p>
          </div>
        </section>
      </main>
  );
}
