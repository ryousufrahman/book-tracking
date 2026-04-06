import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Home from './Components/ROOT/Home.jsx';
import Navbar from './Components/Shared/Navbar.jsx';

const router =createBrowserRouter([
  {
    path: '/',
    element : <Home></Home>
  } ,
  {
    path: 'navbar',
    element : <Navbar></Navbar>
  }


])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
