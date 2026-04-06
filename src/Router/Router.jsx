import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../Components/Pages/Home";
import Books from "../Components/Pages/Books";
import Errorpage from "../Components/Pages/Errorpage";

 export const router =createBrowserRouter([
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


    ] ,

    errorElement : <Errorpage></Errorpage>
  
   }
 


])
