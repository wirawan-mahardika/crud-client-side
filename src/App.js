import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home, { animeLoader, animeSearch } from "./pages/Home";
import Detail from "./pages/Detail";
import Verfikasi, { adminVerify } from "./pages/Verifikasi";
import Admin from "./pages/Admin";
import AddAnime, { addAnimeAction } from "./pages/AddAnime";
import SettingAnime from "./pages/SettingAnime";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<Home />} loader={animeLoader} action={animeSearch}>
        <Route path='detail' element={<Detail />} />
      </Route>
      <Route path='/verify' element={<Verfikasi />} action={adminVerify} />
      <Route path='/admin' element={<Admin />} />
      <Route path='/add-anime' element={<AddAnime />} action={addAnimeAction} />
      <Route
        path='/setting-anime'
        element={<SettingAnime />}
        loader={animeLoader}
      />
    </>
  )
);

export default function App() {
  return <RouterProvider router={router} />;
}
