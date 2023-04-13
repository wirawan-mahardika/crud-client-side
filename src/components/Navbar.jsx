import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav className='flex p-3 justify-between items-center'>
        <h1 className='font-bold text-2xl '>
          CRUD <span className='text-red-700'>A</span>
          <span className='text-blue-700'>ni</span>
          <span className='text-yellow-600'>me</span>
        </h1>
        <NavLink to='/verify' className='hover:font-semibold'>
          Anime Setting
        </NavLink>
      </nav>
    </>
  );
}

{
  /* <svg
  xmlns='http://www.w3.org/2000/svg'
  fill='none'
  viewBox='0 0 24 24'
  strokeWidth={1.5}
  stroke='currentColor'
  className='w-7 h-7'>
  <path
    strokeLinecap='round'
    strokeLinejoin='round'
    d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
  />
</svg> */
}
