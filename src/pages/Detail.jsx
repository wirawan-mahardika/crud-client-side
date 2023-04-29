import { NavLink, useLocation } from "react-router-dom";

export default function Detail() {
  const { state } = useLocation();

  return (
    <>
      <div className='w-screen min-h-screen blur-3xl bg-black opacity-60 fixed top-0 right-0 left-0 bottom-0'></div>
      <div className='flex flex-col fixed p-3 top-5 bottom-5 left-0 right-0 text-white'>
        <div className='w-full h-full flex flex-col gap-y-3 p-6 bg-gray-900 rounded overflow-y-scroll mx-auto sm:w-4/5 lg:w-3/5'>
          {!state ? (
            <div className='flex text-amber-500 w-full h-full justify-center items-center text-4xl'>
              <h4>
                Choose <span className='text-sky-500'>Anime</span>
              </h4>
            </div>
          ) : (
            <>
              {" "}
              <h3 className='font-bold text-3xl text-center'>Anime Detail</h3>
              <img
                src={state.poster}
                alt={state.image}
                className='w-4/5 mx-auto sm:w-2/3 md:w-1/2'
              />
              <p className='font-semibold text-xl text-center sm:text-3xl sm:font-quicksand md:mb-4'>
                {state.title}
              </p>
              <ul className='mx-auto sm:text-lg sm:font-quicksand'>
                <li>Rating : {state.rating}</li>
                <li>Season : {state.season} </li>
                <li>Date Release : {state.tanggalRilis}</li>
                <li>Genre : {state.genre} </li>
                <li>Episode : {state.totalEpisode}</li>
                <li>Status : {state.status}</li>
                <li>Studio : {state.studio}</li>
                <li>Durasi : {state.durasi}</li>
                <li>
                  Sinopsis : <br />{" "}
                  <span className='p-6'>{state.sinopsis}</span>
                </li>
              </ul>
            </>
          )}
        </div>
        <NavLink
          to='/'
          className='px-4 py-1 w-fit mx-auto bg-red-600 mt-5 rounded font-medium sm:px-7 sm:py-1 sm:text-lg'>
          Close
        </NavLink>
      </div>
    </>
  );
}
