import { useState } from 'react'
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About'
import RootLayout from './layouts/RootLayout';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={< Home />} />
      <Route path='about' element={< About />} />
    </Route>
  )
)

function App() {

  return (
    <div className=''>
      <RouterProvider router={router} />
    </div>
  )
}

export default App