import { Form, NavLink } from "react-router-dom";
import setting from "../image/setting.webp";

export default function AddAnime() {
  return (
    <>
      <div
        style={{ backgroundImage: `url(${setting})` }}
        className='w-full min-h-full bg-cover bg-fixed flex justify-center overflow-y-scroll items-center bg-right-bottom'>
        <Form className='w-full h-full p-5 text-white flex font-quicksand flex-col items-center sm:grid sm:grid-cols-2 sm:h-screen'>
          <h2 className='font-bold text-xl font-josefin-sans sm:text-3xl sm:col-span-2 sm:text-center'>
            Form Add Anime
          </h2>
          <div className='flex flex-col w-full p-3 items-center'>
            <label htmlFor='title' className='text-lg sm:text-xl'>
              Title
            </label>
            <input
              type='text'
              className='bg-gray-800 px-3 py-1 rounded w-4/5 sm:text-lg sm:py-2'
              placeholder='Title'
              name='title'
            />
          </div>
          <div className='flex flex-col w-full p-3 items-center'>
            <label htmlFor='title' className='text-lg sm:text-xl'>
              Genre
            </label>
            <input
              type='text'
              className='bg-gray-800 px-3 py-1 rounded w-4/5 sm:text-lg sm:py-2'
              placeholder='genre'
              name='genre'
            />
          </div>
          <div className='flex flex-col w-full p-3 items-center'>
            <label htmlFor='title' className='text-lg sm:text-xl'>
              Total Episode
            </label>
            <input
              type='text'
              className='bg-gray-800 px-3 py-1 rounded w-4/5 sm:text-lg sm:py-2'
              placeholder='Total Episode'
              name='totalEpisode'
            />
          </div>
          <div className='flex flex-col w-full p-3 items-center'>
            <label htmlFor='title' className='text-lg sm:text-xl'>
              Studio
            </label>
            <input
              type='text'
              className='bg-gray-800 px-3 py-1 rounded w-4/5 sm:text-lg sm:py-2'
              placeholder='studio'
              name='studio'
            />
          </div>
          <div className='flex flex-col w-full p-3 items-center'>
            <label htmlFor='title' className='text-lg sm:text-xl'>
              Rating
            </label>
            <input
              type='text'
              className='bg-gray-800 px-3 py-1 rounded w-4/5 sm:text-lg sm:py-2'
              placeholder='rating'
              name='rating'
            />
          </div>
          <div className='flex flex-col w-full p-3 items-center'>
            <label htmlFor='title' className='text-lg sm:text-xl'>
              Season
            </label>
            <input
              type='text'
              className='bg-gray-800 px-3 py-1 rounded w-4/5 sm:text-lg sm:py-2'
              placeholder='season'
              name='season'
            />
          </div>
          <div className='flex flex-col w-full p-3 items-center'>
            <label htmlFor='title' className='text-lg sm:text-xl'>
              Status
            </label>
            <input
              type='text'
              className='bg-gray-800 px-3 py-1 rounded w-4/5 sm:text-lg sm:py-2'
              placeholder='Status'
              name='status'
            />
          </div>
          <div className='flex flex-col w-full p-3 items-center'>
            <label htmlFor='title' className='text-lg sm:text-xl'>
              Durasi
            </label>
            <input
              type='text'
              className='bg-gray-800 px-3 py-1 rounded w-4/5 sm:text-lg sm:py-2'
              placeholder='Durasi'
              name='durasi'
            />
          </div>
          <div className='flex flex-col w-full p-3 items-center'>
            <label htmlFor='title' className='text-lg sm:text-xl'>
              Tanggal Rilis
            </label>
            <input
              type='text'
              className='bg-gray-800 px-3 py-1 rounded w-4/5 sm:text-lg sm:py-2'
              placeholder='Tanggal Rilis'
              name='tanggal rilis'
            />
          </div>
          <div className='flex flex-col w-full p-3 items-center'>
            <label htmlFor='title' className='text-lg sm:text-xl'>
              Poster URL
            </label>
            <input
              type='text'
              className='bg-gray-800 px-3 py-1 rounded w-4/5 sm:text-lg sm:py-2'
              placeholder='Poster Url'
              name='poster'
            />
          </div>
          <div className='flex flex-col w-full p-3 items-center col-span-2'>
            <label htmlFor='title' className='text-lg sm:text-xl'>
              Sinopsis
            </label>
            <textarea
              name='sinopsis'
              cols='30'
              rows='3'
              placeholder='sinopsis . . .'
              className='bg-gray-800 px-3 py-1 rounded w-4/5 sm:text-lg sm:py-2'></textarea>
          </div>
          <button className='px-3 py-1 bg-red-600 rounded w-fit mb-10 sm:mx-auto sm:col-span-2'>
            Simpan
          </button>
        </Form>
      </div>
    </>
  );
}
