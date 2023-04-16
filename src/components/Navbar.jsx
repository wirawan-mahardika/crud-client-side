import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav className='flex p-3 justify-between items-center sm:p-7'>
        <h1 className='font-bold text-2xl sm:text-3xl'>
          CRUD <span className='text-red-700'>A</span>
          <span className='text-blue-700'>ni</span>
          <span className='text-yellow-600'>me</span>
        </h1>
        <NavLink to='/verify' className='hover:font-semibold sm:text-xl '>
          Anime Setting
        </NavLink>
      </nav>
    </>
  );
}