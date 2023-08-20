/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */
import React from 'react'

const Videos = () => {
  return (
    <div>
      <br/>
<h1 className="mb-4 text-4xl text-center font-extrabold leading-none tracking-tight text-yellow-400 md:text-5xl lg:text-4xl dark:text-white">Categories</h1>
    <br/>
    <div className="grid grid-cols-4 gap-4">
         <div>
        <a href="/Podcasts" className="group relative block bg-black">
  <img
    alt="Podcast"
    src="https://media.tenor.com/eGycQfEmlFgAAAAC/on-the-air-live.gif"
    className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
  />

  <div className="relative p-4 sm:p-6 lg:p-8">
        <p className="text-xl font-bold text-white text-left sm:text-2xl">Podcasts</p>

    <div className="mt-32 sm:mt-48 lg:mt-64">
      <div
        className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
      >
        <p className="text-sm text-white">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis
          perferendis hic asperiores quibusdam quidem voluptates doloremque
          reiciendis nostrum harum. Repudiandae?
        </p>
         </div>
        </div>
       </div>
    </a>
   </div>
        <div>
        <a href="#" className="group relative block bg-black">
  <img
    alt="Documentaries"
    src="https://i.gifer.com/origin/14/140d59707323d160c09c55ecee5b9bd3.gif"
    className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
  />

  <div className="relative p-4 sm:p-6 lg:p-8">
    

    <p className="text-xl font-bold text-white sm:text-2xl">Documentaries</p>

    <div className="mt-32 sm:mt-48 lg:mt-64">
      <div
        className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
      >
        <p className="text-sm text-white">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis
          perferendis hic asperiores quibusdam quidem voluptates doloremque
          reiciendis nostrum harum. Repudiandae?
        </p>
      </div>
    </div>
  </div>
</a>

        </div>

        <div>
        <a href="#" className="group relative block bg-black">
  <video
    loop
    autoPlay
    src="https://bafybeiegubvvc553ux2joxq5qbyiypmvgavvhdrk7tckpgufby7q65j4ra.ipfs.dweb.link/video%20copy.mp4"
    className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
  />

  <div className="relative p-4 sm:p-6 lg:p-8">
    

    <p className="text-xl font-bold text-white sm:text-2xl">Skits</p>

    <div className="mt-32 sm:mt-48 lg:mt-64">
      <div
        className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
      >
        <p className="text-sm text-white">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis
          perferendis hic asperiores quibusdam quidem voluptates doloremque
          reiciendis nostrum harum. Repudiandae?
        </p>
      </div>
    </div>
  </div>
</a>

        </div>

        <div>
        <a href="#" className="group relative block bg-black">
  <img
    alt="News"
    src="https://media.tenor.com/Ng2uEPPbOUAAAAAC/breaking-news-news.gif"
    className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
  />

  <div className="relative p-4 sm:p-6 lg:p-8">
    

    <p className="text-xl text-left font-bold text-white sm:text-2xl">News</p>

    <div className="mt-32 sm:mt-48 lg:mt-64">
      <div
        className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
      >
        <p className="text-sm text-white">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis
          perferendis hic asperiores quibusdam quidem voluptates doloremque
          reiciendis nostrum harum. Repudiandae?
        </p>
      </div>
    </div>
  </div>
</a>

        </div>

       
</div>
</div>
  )
}

export default Videos

