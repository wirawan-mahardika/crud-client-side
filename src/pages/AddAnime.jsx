import { Form, NavLink } from "react-router-dom";
import setting from "../image/setting.webp";

export default function AddAnime() {
  return (
    <>
      <div
        style={{ backgroundImage: `url(${setting})` }}
        className='w-full min-h-full bg-cover bg-fixed flex justify-center overflow-y-scroll items-center bg-right-bottom'>
        <Form className='w-full h-full p-5 text-white flex font-quicksand flex-col items-center'>
          <h2 className='font-bold text-xl font-josefin-sans'>
            Form Add Anime
          </h2>
          <div className='flex flex-col w-full p-3 items-center'>
            <label htmlFor='title' className='text-lg'>
              Title
            </label>
            <input
              type='text'
              className='bg-gray-800 px-3 py-1 rounded w-4/5'
              placeholder='Title'
              name='title'
            />
          </div>
          <div className='flex flex-col w-full p-3 items-center'>
            <label htmlFor='title' className='text-lg'>
              Genre
            </label>
            <input
              type='text'
              className='bg-gray-800 px-3 py-1 rounded w-4/5'
              placeholder='genre'
              name='genre'
            />
          </div>
          <div className='flex flex-col w-full p-3 items-center'>
            <label htmlFor='title' className='text-lg'>
              Total Episode
            </label>
            <input
              type='text'
              className='bg-gray-800 px-3 py-1 rounded w-4/5'
              placeholder='Total Episode'
              name='totalEpisode'
            />
          </div>
          <div className='flex flex-col w-full p-3 items-center'>
            <label htmlFor='title' className='text-lg'>
              Studio
            </label>
            <input
              type='text'
              className='bg-gray-800 px-3 py-1 rounded w-4/5'
              placeholder='studio'
              name='studio'
            />
          </div>
          <div className='flex flex-col w-full p-3 items-center'>
            <label htmlFor='title' className='text-lg'>
              Rating
            </label>
            <input
              type='text'
              className='bg-gray-800 px-3 py-1 rounded w-4/5'
              placeholder='rating'
              name='rating'
            />
          </div>
          <div className='flex flex-col w-full p-3 items-center'>
            <label htmlFor='title' className='text-lg'>
              Season
            </label>
            <input
              type='text'
              className='bg-gray-800 px-3 py-1 rounded w-4/5'
              placeholder='season'
              name='season'
            />
          </div>
          <div className='flex flex-col w-full p-3 items-center'>
            <label htmlFor='title' className='text-lg'>
              Status
            </label>
            <input
              type='text'
              className='bg-gray-800 px-3 py-1 rounded w-4/5'
              placeholder='Status'
              name='status'
            />
          </div>
          <div className='flex flex-col w-full p-3 items-center'>
            <label htmlFor='title' className='text-lg'>
              Durasi
            </label>
            <input
              type='text'
              className='bg-gray-800 px-3 py-1 rounded w-4/5'
              placeholder='Durasi'
              name='durasi'
            />
          </div>
          <div className='flex flex-col w-full p-3 items-center'>
            <label htmlFor='title' className='text-lg'>
              Tanggal Rilis
            </label>
            <input
              type='text'
              className='bg-gray-800 px-3 py-1 rounded w-4/5'
              placeholder='Tanggal Rilis'
              name='tanggal rilis'
            />
          </div>
          <div className='flex flex-col w-full p-3 items-center'>
            <label htmlFor='title' className='text-lg'>
              Poster URL
            </label>
            <input
              type='text'
              className='bg-gray-800 px-3 py-1 rounded w-4/5'
              placeholder='Poster Url'
              name='poster'
            />
          </div>
          <div className='flex flex-col w-full p-3 items-center'>
            <label htmlFor='title' className='text-lg'>
              Sinopsis
            </label>
            <textarea
              name='sinopsis'
              cols='30'
              rows='3'
              placeholder='sinopsis . . .'
              className='bg-gray-800 px-3 py-1 rounded w-4/5'></textarea>
          </div>
          <button className='px-3 py-1 bg-red-600 rounded w-fit mb-10'>
            Simpan
          </button>
        </Form>
      </div>
    </>
  );
}
