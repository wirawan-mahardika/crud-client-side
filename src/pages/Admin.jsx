import { NavLink, useNavigate } from "react-router-dom";
import setting from "../image/setting.webp";
import { useEffect } from "react";
import axios from "axios";

export default function Admin() {
  const navigate = useNavigate()

  useEffect(() => {
    axios.get('http://localhost:1000/api/admin/auth', {withCredentials: true})
      .then(result => {
        localStorage.setItem('tokenExp', result.data.serverData.tokenExp)
        if(result.data.code === 401) return navigate('/')
      }).catch(err => {
        if (err) {
          return navigate('/')
        }
      })
  }, [navigate])

  return (
    <>
      <div
        style={{ backgroundImage: `url(${setting})` }}
        className='w-full h-screen bg-cover flex justify-center items-center bg-right-bottom'>
        <div className='flex flex-col gap-y-10 justify-center h-full text-center sm:flex-row sm:text-2xl sm:items-center sm:justify-evenly sm:w-full'>
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
