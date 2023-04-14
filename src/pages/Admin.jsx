import { NavLink } from "react-router-dom";
import setting from "../image/setting.webp";

export default function Admin() {
  return (
    <>
      <div
        style={{ backgroundImage: `url(${setting})` }}
        className='w-full h-screen bg-cover flex justify-center items-center bg-right-bottom'>
        <div className='flex flex-col gap-y-10 justify-center h-full text-center'>
          <NavLink
            to='/add-anime'
            className={
              "bg-red-700 hover:bg-red-900 text-white px-5 py-2 rounded font-medium"
            }>
            Add Anime
          </NavLink>
          <NavLink
            to='/setting-anime'
            className={
              "bg-red-700 hover:bg-red-900 text-white px-5 py-2 rounded font-medium"
            }>
            Setting Anime
          </NavLink>
        </div>
      </div>
    </>
  );
}
