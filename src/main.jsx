import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from "react-router/dom";
import { router } from './Router/Router';
import GlobalContext from './GlobalContext';





createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalContext>
      
         <RouterProvider router={router}></RouterProvider>

    </GlobalContext>
    
  </StrictMode>,
)
