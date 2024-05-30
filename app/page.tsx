import { SearchSvg } from '@/components/SearchSvg';
import Hero from '@/components/hero';

export default function Home() {
  return (
    <main className='bg-stone-50  h-screen w-full flex flex-col'>
      <header className=' pb-6 md:pb-0'>
        <nav className='flex justify-between items-center pt-3 px-4'>
          <h1 className='text-2xl font-bold'>Patreon</h1>
          <nav className='mr-auto ml-10 hidden md:flex  '>
            <ul className='flex-grow flex gap-4 pt-1 font-semibold  text-stone-400'>
              <li>Explore</li>
              <li className='text-stone-700'>FAQ</li>
              <li>Support</li>
            </ul>
          </nav>

          <ul className='flex gap-4 justify-center items-center font-semibold'>
            <li className='bg-white hidden md:flex px-2 items-center rounded-full overflow-hidden mr-4 text-stone-400 shadow-sm group-active:shadow-lg'>
              <SearchSvg width={26} height={26} />
              <input
                type='text'
                className=' p-2 rounded-md focus-visible:border-none focus-visible:outline-none w-48 group'
                placeholder='Search for creators'
              />
            </li>
            <li>Log in</li>
            <li>
              <button className='bg-yellow-400 py-2 rounded-full px-4'>
                Sign up
              </button>
            </li>
          </ul>
        </nav>
      </header>
      <Hero />
    </main>
  );
}
