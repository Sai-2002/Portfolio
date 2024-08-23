import React from 'react'

const Hero = () => {
  return (
    <div className="h-screen p-8 pt-10 items-center content-center">
      <div className="grid grid-cols-6 gap-4">
        <div className="col-span-1"></div>
        <div className="col-span-2 items-center content-center p-8">
          <h1 className="font-bold text-8xl pt-4">
            {/* Hello */}
            <span className=" bg-gradient-to-br from-white to-gray-400 bg-clip-text">
              Sai Mukesh
            </span>
          </h1>
          <p className = "text-gray-600 text-lg pt-4">
            I am a software developer who is driven through passion and
            dedication
          </p>
          <a href='#Contact'>
            <button className="hover:bg-slate-200 hover:border-white transition-all ease-linear duration-100 py-1 px-2 mt-4 rounded-md border-2 border-black">
              Contact Me
            </button>
          </a>
        </div>
        {/* <div className="col-span-2">
          <div className=" grid grid-cols-3 gap-3">
            <div className="bg-black col-span-1"></div>
            <div className="bg-gray-900 col-span-1"></div>
            <div className="bg-blue-100 col-span-1"></div>
          </div>
        </div> */}
        <div className="col-span-2 w-[100%] items-center content-center ">
          <img
            src="giphy.webp"
            alt="coder-image"
            className='rounded-full shadow-lg'
          ></img>
        </div>
        <div className="col-span-1">{/* <img src='giphy.webp'></img> */}</div>
      </div>
    </div>
  );
}

export default Hero