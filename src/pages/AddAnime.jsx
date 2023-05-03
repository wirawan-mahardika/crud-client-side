import { Form, useNavigate } from "react-router-dom";
import setting from "../image/setting.webp";
import { useEffect } from "react";
import axios from "axios";

export default function AddAnime() {
  const navigate = useNavigate()

  useEffect(() => {
    if(localStorage.getItem('tokenExp') <= Date.now()) {
      axios.get('http://localhost:1000/api/admin/refresh-token', {withCredentials: true })
      .then(result => {
        localStorage.setItem('tokenExp', result.data.dataToken.exp)
        localStorage.setItem('token', result.data.dataToken.token)
      })
      .catch(err => navigate('/'))
    } else if(!localStorage.getItem('token')) {
      return navigate('/')
    } 
  }, [])

  return (
    <>
      <div
        style={{ backgroundImage: `url(${setting})` }}
        className='w-full min-h-full bg-cover bg-fixed flex justify-center overflow-y-scroll items-center bg-right-bottom'>
        <Form method="post" className='w-full h-full p-5 text-white flex font-quicksand flex-col items-center sm:grid sm:grid-cols-2 sm:h-screen'>
          <h2 className='font-bold text-xl font-josefin-sans sm:text-3xl sm:col-span-2 sm:text-center md:text-4xl'>
            Form Add Anime
          </h2>
          <div className='flex flex-col w-full p-3 items-center'>
            <label htmlFor='title' className='text-lg sm:text-xl md:text-2xl'>
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
            <label htmlFor='title' className='text-lg sm:text-xl md:text-2xl'>
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
            <label htmlFor='title' className='text-lg sm:text-xl md:text-2xl'>
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
            <label htmlFor='title' className='text-lg sm:text-xl md:text-2xl'>
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
            <label htmlFor='title' className='text-lg sm:text-xl md:text-2xl'>
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
            <label htmlFor='title' className='text-lg sm:text-xl md:text-2xl'>
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
            <label htmlFor='title' className='text-lg sm:text-xl md:text-2xl'>
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
            <label htmlFor='title' className='text-lg sm:text-xl md:text-2xl'>
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
            <label htmlFor='title' className='text-lg sm:text-xl md:text-2xl'>
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
            <label htmlFor='title' className='text-lg sm:text-xl md:text-2xl'>
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
            <label htmlFor='title' className='text-lg sm:text-xl md:text-2xl'>
              Sinopsis
            </label>
            <textarea
              name='sinopsis'
              cols='30'
              rows='3'
              placeholder='sinopsis . . .'
              className='bg-gray-800 px-3 py-1 rounded w-4/5 sm:text-lg sm:py-2'></textarea>
          </div>
          <div className='lg:pb-6 sm:mx-auto sm:col-span-2'>
            <button type="submit" className='px-3 py-1 bg-red-600 rounded w-fit mb-10 lg:mx-auto'>
              Simpan
            </button>
          </div>
        </Form>
      </div>
    </>
  );
}

export const addAnimeAction = async ({request}) => {
  const formData = Object.fromEntries(await request.formData())
  const tokenExp = localStorage.getItem('tokenExp')

  for (const data in formData) {
    if(!formData[data]){
      delete formData[data]
    }
  }

  const axiosCreateAnime = axios.create()

  axiosCreateAnime.interceptors.request.use(async config => {
    if(tokenExp <= Date.now()) {
      const response = await axios.get('http://localhost:1000/api/admin/refresh-token', {withCredentials: true })
      localStorage.setItem('token', response.data.dataToken.token)
      localStorage.setItem('tokenExp', response.data.dataToken.exp)
      config.headers.Authorization = 'Bearer ' + response.data.dataToken.token
    }
    return config
  })

  try {
    const response = await axiosCreateAnime.post('http://localhost:1000/api/animes', formData, {
      withCredentials: true,
      headers: {Authorization: 'Bearer ' + localStorage.getItem('token')}
    })
    return response.data
  } catch (error) {
    console.log(error)
    return false
  }
}