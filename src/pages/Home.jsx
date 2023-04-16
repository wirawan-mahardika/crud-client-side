import { useEffect, useState } from "react";
import { Form, Link, NavLink, Outlet, useLoaderData } from "react-router-dom";
import Navbar from "../components/Navbar";
import backgroundImage from "../image/dashboard.jpg";
import axios from "axios";

export default function Home() {
  const data = useLoaderData();
  console.log(data);

  return (
    <>
      <div
        style={{ backgroundImage: `url(${backgroundImage})` }}
        className='w-screen min-h-max bg-cover text-zinc-300 bg-fixed bg-center font-quicksand'>
        <Navbar />
        <div className='flex flex-col'>
          <Form className='flex p-3 flex-col gap-y-2 w-full pl-6'>
            <h3 className='font-bold text-xl font-josefin-sans sm:text-red-900 sm:text-3xl'>
              Search Anime Here
            </h3>
            <input
              type='text'
              placeholder='Type the title . . .'
              className='rounded px-3 py-1 bg-gray-800 w-3/5 outline-none focus:ring focus:ring-indigo-950 sm:text-lg sm:px-4'
            />
            <button className='px-4 py-0.5 rounded bg-red-900 text-black font-semibold w-fit sm:px-6 sm:py-2'>
              Search
            </button>
          </Form>
          <div className='flex flex-col gap-y-5 mt-4 pb-10 sm:grid sm:grid-cols-2'>
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
                      <h2 className='font-bold text-2xl mt-2'>{anime.title}</h2>
                      <Link
                        to='/detail'
                        state={anime}
                        className='bg-blue-500 font-bold px-3 py-1 rounded mt-3'>
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
