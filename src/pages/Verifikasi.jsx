import { Form, NavLink, useActionData } from "react-router-dom";
import verifyBg from "../image/loginbg.jpg";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Verfikasi() {
  const [authCode, setAuthCode] = useState()
  const data = useActionData()
  useEffect(() => {
    axios.get('http://localhost:1000/api/admin/auth', {withCredentials: true })
      .then(result => {
        localStorage.setItem('tokenExp', result.data.serverData.tokenExp)
        setAuthCode(result.data.code)
      })
      .catch(err => console.log(err))
  }, [])


  return (
    <>
      <div
        style={{ backgroundImage: `url(${verifyBg})` }}
        className='w-full h-screen bg-cover flex justify-center items-center'>
        <div className='w-full h-fit p-5 flex flex-col gap-y-2 capitalize'>
          <h3 className='text-3xl font-bold text-gray-200 font-josefin-sans text-center sm:text-5xl lg:text-3xl'>
            Admin Status verify
          </h3>
          {(data || authCode) && <p className="mx-auto text-xl text-green-600 font-semibold">Welcome Admin</p>}
          {
            (data || authCode) ? 
            <div className="mx-auto">
              <ul className="flex gap-x-5">
                <li className="px-5 py-1 bg-red-600 rounded font-medium text-lg">
                  <NavLink to='/add-anime'>ADD ANIME</NavLink>
                </li>
                <li className="px-5 py-1 bg-red-600 rounded font-medium text-lg">
                  <NavLink to='/admin'>ADMIN</NavLink>
                </li>
                <li className="px-5 py-1 bg-red-600 rounded font-medium text-lg">
                  <NavLink to='/setting-anime'>SETTING ANIME</NavLink>
                </li>
              </ul>
            </div>
            : 
            <Form
              method="post"
              className='flex flex-col gap-y-3 font-semibold sm:text-xl'>
              <div className='w-full flex flex-col gap-y-2 text-gray-300 items-center'>
                <p>Who Are You</p>
                <input
                  type='text'
                  className='px-3 py-1 outline-none rounded text-gray-950 focus:ring-2 focus:ring-red-700 bg-gray-300 sm:px-5 sm:w-3/5 sm:py-2 lg:py-1 lg:px-3 lg:text-base lg:w-2/5'
                  placeholder='Only admin know'
                  name='name'
                />
              </div>
              <div className='w-full flex flex-col gap-y-2 text-gray-300 items-center'>
                <p>Email</p>
                <input
                  type='text'
                  className='px-3 py-1 outline-none rounded text-gray-950 focus:ring-2 focus:ring-red-700 bg-gray-300 sm:px-5 sm:w-3/5 sm:py-2 lg:py-1 lg:px-3 lg:text-base lg:w-2/5'
                  placeholder="Admin's email"
                  name='email'
                />
              </div>
              <div className='w-full flex flex-col gap-y-2 text-gray-300 items-center'>
                <p>What's your goal</p>
                <input
                  type='text'
                  className='px-3 py-1 outline-none rounded text-gray-950 focus:ring-2 focus:ring-red-700 bg-gray-300 sm:px-5 sm:w-3/5 sm:py-2 lg:py-1 lg:px-3 lg:text-base lg:w-2/5'
                  placeholder="Admin's goal"
                  name='goal'
                />
              </div>
              <div className='w-full flex text-center gap-y-2 flex-col text-gray-300 items-center'>
                <p>Favorite programing language</p>
                <input
                  type='text'
                  className='px-3 py-1 outline-none rounded text-gray-950 focus:ring-2 focus:ring-red-700 bg-gray-300 sm:px-5 sm:w-3/5 sm:py-2 lg:py-1 lg:px-3 lg:text-base lg:w-2/5'
                  placeholder='favorite language'
                  name='language'
                />
              </div>
              <button
                type="submit"
                className='bg-blue-700 px-3 py-1 rounded font-medium w-fit mx-auto sm:px-8 sm:py-2 lg:px-3 lg:py-1 lg:text-lg'>
                Verify
              </button>
            </Form>
          }
        </div>
      </div>
    </>
  );
}

export const adminVerify = async ({ request }) => {
  const data = Object.fromEntries(await request.formData());

  try {
    const response = await axios.post("http://localhost:1000/api/admin", data, {withCredentials: true});
    localStorage.setItem('tokenExp', response.data.tokenExp)
    return response.data;
  } catch (error) {
    console.log(error.response);
    return "false";
  }
};
