import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import MainLayout from './Layout/MainLayout';
import Home from './Components/Pages/Home';
import Books from './Components/Pages/Books';



const router =createBrowserRouter([
   {
    path : '/',
    element : <MainLayout></MainLayout> ,
    children : [
     {
      index : true ,
      element : <Home></Home>
     },
     {
      path : '/books',
      element : <Books></Books>
     }


    ]
  
   }
 


])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
