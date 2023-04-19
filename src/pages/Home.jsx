import { Form, Link, Outlet, useLoaderData } from "react-router-dom";
import Navbar from "../components/Navbar";
import backgroundImage from "../image/dashboard.jpg";
import axios from "axios";

export default function Home() {
  const data = useLoaderData();

  return (
    <>
      <div
        style={{ backgroundImage: `url(${backgroundImage})` }}
        className='w-full min-h-max bg-cover text-zinc-300 bg-fixed bg-center font-quicksand'>
        <Navbar />
        <div className='flex flex-col'>
          <Form className='flex p-3 flex-col gap-y-2 w-full pl-6'>
            <h3 className='font-bold text-xl font-josefin-sans sm:text-red-900 sm:text-3xl md:text-blue-700 lg:text-amber-700 lg:text-xl'>
              Search Anime Here
            </h3>
            <input
              type='text'
              placeholder='Type the title . . .'
              className='rounded px-3 py-1 bg-gray-800 w-3/5 outline-none focus:ring focus:ring-indigo-950 sm:text-lg sm:px-4 md:px-5 md:py-2 md:text-xl lg:px-4 lg:py-1 lg:text-base lg:w-1/3'
            />
            <button className='px-4 py-0.5 rounded bg-red-900 text-black font-semibold w-fit sm:px-6 sm:py-2 lg:py-1 lg:px-4'>
              Search
            </button>
          </Form>
          <div className='flex flex-col gap-y-5 mt-4 pb-10 sm:grid sm:grid-cols-2 lg:grid-cols-4'>
            {data &&
              data.map((anime) => {
                return (
                  <>
                    <div className='w-5/6 mx-auto text-center'>
                      <img
                        src={anime.poster}
                        alt={anime.title}
                        className='mx-auto min-w-full'
                      />
                      <h2 className='font-bold text-2xl my-2 md:text-3xl lg:text-xl'>
                        {anime.title}
                      </h2>
                      <Link
                        to='/detail'
                        state={anime}
                        className='bg-blue-500 font-bold px-3 py-1 rounded md:text-xl lg:text-base'>
                        Show Detail
                      </Link>
                    </div>
                  </>
                );
              })}
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
}

export const animeLoader = async () => {
  try {
    const response = await axios.get("http://localhost:1000/api/animes");
    return response.data;
  } catch (error) {
    return error.response;
  }
};
