import { Form } from "react-router-dom";
import verifyBg from "../image/loginbg.jpg";

export default function Verfikasi() {
  return (
    <>
      <div
        style={{ backgroundImage: `url(${verifyBg})` }}
        className='w-full h-screen bg-cover flex justify-center items-center'>
        <div className='w-full h-fit p-5 flex flex-col gap-y-2 capitalize'>
          <h3 className='text-3xl font-bold text-gray-200 font-josefin-sans text-center'>
            Admin Status verify
          </h3>
          <Form method='post' className='flex flex-col gap-y-3 font-semibold'>
            <div className='w-full flex flex-col gap-y-2 text-gray-300 items-center'>
              <p>Who Are You</p>
              <input
                type='text'
                className='px-3 py-1 outline-none rounded text-gray-950 focus:ring-2 focus:ring-red-700 bg-gray-300'
                placeholder='Only admin know'
              />
            </div>
            <div className='w-full flex flex-col gap-y-2 text-gray-300 items-center'>
              <p>Email</p>
              <input
                type='text'
                className='px-3 py-1 outline-none rounded text-gray-950 focus:ring-2 focus:ring-red-700 bg-gray-300'
                placeholder="Admin's email"
              />
            </div>
            <div className='w-full flex flex-col gap-y-2 text-gray-300 items-center'>
              <p>What's your goal</p>
              <input
                type='text'
                className='px-3 py-1 outline-none rounded text-gray-950 focus:ring-2 focus:ring-red-700 bg-gray-300'
                placeholder="Admin's goal"
              />
            </div>
            <div className='w-full flex text-center gap-y-2 flex-col text-gray-300 items-center'>
              <p>Favorite programing language</p>
              <input
                type='text'
                className='px-3 py-1 outline-none rounded text-gray-950 focus:ring-2 focus:ring-red-700 bg-gray-300'
                placeholder='favorite language'
              />
            </div>
            <button
              type='submit'
              className='bg-blue-700 px-3 py-1 rounded font-medium w-fit mx-auto'>
              Verify
            </button>
          </Form>
        </div>
      </div>
    </>
  );
}