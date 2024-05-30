import React from 'react';
import HeaderNavigation from './HeaderNavigation';
import Link from 'next/link';

function Header() {
  return (
    <header className='py-5 px-6 flex justify-between items-center'>
      <h1 className='font-bold'>contact@azdinebouali.tech</h1>
      <HeaderNavigation />

      <div>
        <Link className='px-5 py-2 rounded-full' href={'#faq'}>
          FAQ
        </Link>
        <button className='bg-blue-500 px-5 py-2 rounded-full text-white'>
          Get Started
        </button>
      </div>
    </header>
  );
}

export default Header;
