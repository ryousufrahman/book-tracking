import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../Components/Pages/Home";
import Books from "../Components/Pages/Books";
import Errorpage from "../Components/Pages/Errorpage";
import BookDetail from "../Components/Pages/bookdetails/BookDetail";
import ListedBook from "../Components/Pages/ListedBook";

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
     } ,
     {
      path : '/ListedBooks',
      element : <ListedBook></ListedBook>



     } ,
     {
      path:'bookDetails/:bookId' ,
      element : <BookDetail></BookDetail>,
      loader : ()=> fetch('/booksData.json')
      
     }


    ] ,

    errorElement : <Errorpage></Errorpage>
  
   }
 


])
