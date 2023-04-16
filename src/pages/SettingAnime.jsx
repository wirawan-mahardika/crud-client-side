import { NavLink, useLoaderData } from "react-router-dom";
import setting from "../image/setting.webp";

export default function SettingAnime() {
  const data = useLoaderData();
  console.log(data);

  return (
    <>
      <div
        style={{ backgroundImage: `url(${setting})` }}
        className='w-full h-screen bg-cover justify-center flex bg-center overflow-hidden'>
        <div className='flex flex-col w-full'>
          <nav className='flex w-full font-bold text-xl justify-evenly text-blue-600 font-josefin-sans p-3 sm:text-3xl'>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/admin'>Setting</NavLink>
          </nav>
          <div className='inline-block py-2'>
            <div className='overflow-hidden'>
              <table className='w-full text-left text-sm font-light text-white sm:text-xl'>
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
                        <tr className='border-b'>
                          <td className='whitespace-nowrap px-6 py-4 font-medium'>
                            {i + 1}
                          </td>
                          <td className='whitespace-nowrap px-6 py-4 sm:font-semibold'>
                            {anime.title}
                          </td>
                          <td className='whitespace-nowrap px-6 py-4 '>
                            <button className='bg-red-600 px-4 py-2 rounded'>
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
