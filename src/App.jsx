
import { createBrowserRouter } from 'react-router-dom'
import './App.css'
import { Trendings } from './pages/Trendings'
import { Movies } from './pages/Movies'
import { SearchPage } from './pages/SearchPage'
import { TVSeries } from './pages/TVSeries'
import { NotFound } from './pages/NotFound'
import { RouterProvider } from 'react-router-dom'
import { Header } from './components/Header'

const router = createBrowserRouter([
  {
    element: <Header />,
    children: [
      { path: "/", element: <Trendings /> },
      { path: "/movies", element: <Movies /> },
      { path: "/search", element: <SearchPage /> },
      { path: "/series", element: <TVSeries /> },
      { path: "*", element: <NotFound /> }
    ]
  }

], {


  future: {


    v7_relativeSplatPath: true,


    v7_normalizeFormMethod: true,


    v7_fetcherPersist: true,


    v7_partialHydration: true,


    v7_skipActionErrorRevalidation: true,




  }
})



/**
 * {path:"/",element:<Trendings/>},
  {path:"/movies",element:<Movies/>},
  {path:"/search",element:<SearchPage/>},
  {path:"/series",element:<TVSeries/>},
  {path:"*",element:<NotFound/>}
 */

function App() {


  return (
    <RouterProvider router={router} future={{v7_startTransition:true}}/>
  )
}

export default App
