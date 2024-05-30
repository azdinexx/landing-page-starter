import React from 'react';
import { StarSvg } from './StarSvg';

function index() {
  return (
    <section className='relative max-w-7xl w-full mx-auto flex-grow flex flex-col justify-center  items-center gap-5 '>
      <div className='text-green-500 flex items-center gap-2 mt-10 md:mt-0'>
        <div className='flex'>
          <StarSvg />
          <StarSvg />
          <StarSvg />
          <StarSvg />
          <StarSvg />
        </div>
        <span>Loved by over 100,000 creators</span>
      </div>
      <h1 className='md:text-8xl text-6xl text-center font-bold'>
        Fund your <br />
        creative work
      </h1>
      <h2 className='text-lg max-w-md text-center'>
        Accept support, Start a membership. Setup a shop, it&apos;s easier than
        you think.
      </h2>
      <button className='py-3 px-5 bg-yellow-400 rounded-full font-bold text-lg'>
        Start my page
      </button>
      <p className='text-black/70 text-sm mb-10 md:mb-0'>
        it&apos;s free and takes less than a minute
      </p>
      {/* 
        reviews
      */}
      <ul className='md:absolute top-0 left-0 h-full flex md:flex-col md:space-y-20 gap-4 md:gap-0 justify-center px-4 md:px-0'>
        <li className='md:max-w-[220px] aspect-square  border p-4 rounded-3xl flex flex-col justify-center items-center text-center gap-2 shadow-md md:-rotate-45 md:translate-x-2 bg-white'>
          <p>“Patreon is the reason my creative work is possible.”</p>
          <div className='flex text-green-500'>
            <StarSvg />
            <StarSvg />
            <StarSvg />
            <StarSvg />
            <StarSvg />
          </div>
          <p className=' text-sm font-semibold text-black/50'>@mohammed</p>
        </li>
        <li className='md:max-w-[220px] aspect-square  border p-4 rounded-3xl flex flex-col justify-center items-center text-center gap-2 shadow-md md:rotate-12 md:-translate-x-8 bg-white'>
          <p>“Patreon is the reason my creative work is possible.”</p>
          <div className='flex text-green-500'>
            <StarSvg />
            <StarSvg />
            <StarSvg />
            <StarSvg />
            <StarSvg />
          </div>
          <p className=' text-sm font-semibold text-black/50'>@mohammed</p>
        </li>
      </ul>
      {/*
      the right reviews
      */}
      <ul className='md:absolute top-0 right-0 h-full flex md:flex-col md:space-y-20 justify-center px-4 md:px-0 gap-4 md:gap-0'>
        <li className='md:max-w-[220px] aspect-square  border p-4 rounded-3xl flex flex-col justify-center items-center text-center gap-2 shadow-md rotate-12 md:-translate-x-8 bg-white'>
          <p>“Patreon is the reason my creative work is possible.”</p>
          <div className='flex text-green-500'>
            <StarSvg />
            <StarSvg />
            <StarSvg />
            <StarSvg />
            <StarSvg />
          </div>
          <p className=' text-sm font-semibold text-black/50'>@mohammed</p>
        </li>
        <li className='md:max-w-[220px] aspect-square  border p-4 rounded-3xl flex flex-col justify-center items-center text-center gap-2 shadow-md md:-rotate-12 md:translate-x-2 md:-translate-y-20 bg-white'>
          <p>“Patreon is the reason my creative work is possible.”</p>
          <div className='flex text-green-500'>
            <StarSvg />
            <StarSvg />
            <StarSvg />
            <StarSvg />
            <StarSvg />
          </div>
          <p className=' text-sm font-semibold text-black/50'>@mohammed</p>
        </li>
      </ul>
    </section>
  );
}

export default index;
