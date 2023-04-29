import { NavLink, useLoaderData, useNavigate } from "react-router-dom";
import setting from "../image/setting.webp";
import { useEffect, useState } from "react";
import axios from "axios";

export default function SettingAnime() {
  const actionData = useLoaderData();
  const navigate = useNavigate()
  const [data, setData] = useState(actionData)

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
  }, [])

  const deleteAnime = async (animeId) => {
    try {
      await axios.delete('http://localhost:1000/api/animes/'+animeId, {withCredentials: true})
      const newData = data.filter(anime => anime.id !== animeId)
      setData(newData)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <div
        style={{ backgroundImage: `url(${setting})` }}
        className='w-full h-screen bg-cover justify-center flex bg-center overflow-hidden'>
        <div className='flex flex-col w-full overflow-y-auto'>
          <nav className='flex w-full font-bold text-xl justify-evenly text-blue-600 font-josefin-sans p-3 sm:text-3xl md:pt-4 lg:text-2xl'>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/admin'>Setting</NavLink>
          </nav>
          <div className='inline-block py-2'>
            <div className=''>
              <table className='w-full text-left text-sm font-light text-white sm:text-xl lg:w-4/5 lg:mx-auto lg:text-lg'>
                <thead className='border-b font-medium'>
                  <tr>
                    <th scope='col' className='px-6 py-4'>
                      No
                    </th>
                    <th scope='col' className='px-6 py-4'>
                      Title
                    </th>
                    <th scope='col' className='px-6 py-4'>
                      Handle
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {data &&
                    data.map((anime, i) => {
                      return (
                        <tr key={anime.id} className='border-b md:text-2xl  lg:text-lg'>
                          <td className='whitespace-nowrap px-6 py-4 font-medium'>
                            {i + 1}
                          </td>
                          <td className='whitespace-nowrap px-6 py-4 sm:font-semibold'>
                            {anime.title}
                          </td>
                          <td className='whitespace-nowrap px-6 py-4'>
                            <button onClick={() => deleteAnime(anime.id)} className='bg-red-600 px-4 py-2 rounded lg:px-2 lg:py-1 lg:text-base lg:font-medium'>
                              Hapus
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
