import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home, { animeLoader } from "./pages/Home";
import Detail from "./pages/Detail";
import Verfikasi from "./pages/Verifikasi";
import AnimeSetting from "./pages/Animesetting";
import Admin from "./pages/Admin";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<Home />} loader={animeLoader}>
        <Route path='detail' element={<Detail />} />
      </Route>
      <Route path='/verify' element={<Verfikasi />} />
      <Route path='/admin' element={<Admin />} />
    </>
  )
);

export default function App() {
  return <RouterProvider router={router} />;
}
