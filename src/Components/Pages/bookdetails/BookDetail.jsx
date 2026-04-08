import React, { useContext } from 'react';
import { useLoaderData, useParams } from 'react-router';
import { BookContext } from '../../../GlobalContext';

const BookDetail = () => {
    const {bookId} = useParams()
    const books = useLoaderData()

    const bookcontext =useContext(BookContext)
    const { markRead ,
        setMarkRead ,
        markWish,
        setMarkWish
         } =bookcontext

         
   const bookClicked = books.find(cbook => cbook.bookId == bookId);
   const handleMarkRead =(bookClicked)=>{
      const readAddedbook =   markRead.find(rb=> rb.bookId == bookClicked.bookId) ;
    const existinwish = markWish.find(wb=> wb.bookId == bookClicked.bookId)
      if(readAddedbook ){
        alert('already added in read list')
        return
      }
      else if(existinwish){
        alert('added in wishlist')
        return
      }
     else {
        setMarkRead([...markRead , bookClicked])
      }
      console.log(markRead);
      


   }
   const handleMarkWish = (bookClicked)=>{
     const existinread = markRead.find(rb=> rb.bookId == bookClicked.bookId)
     const existinwish =markWish.find(wb=> wb.bookId == bookClicked.bookId)
     if(existinread){
        alert('exist in read')
        return
     }
     else if(existinwish){
        alert('already exist in wishlish')
        return
     }
     else{
        setMarkWish([...markWish , bookClicked ])
     }


   }
    
    
    return (
        <div className='max-w-[1400px] mx-auto shadow rounded-2xl p-4 mt-5  '>
            <div className='main-box flex gap-5 items-center justify-between'>
                <div className='left-img w-[50%] bg-gray-100 p-5'>
                    <img src={bookClicked.image} alt=""  className='max-w-[250px] mx-auto'/>

                </div>
                <div className='right-content w-[50%] space-y-5'>
                    <div className='title'>
                        <h2 className='font-bold text-3xl'>{bookClicked.bookName}</h2>
                        <p>By : {bookClicked.author}</p>

                    </div>
                     <div className='review'>
                        <p>{bookClicked.review}</p>

                     </div>
                     <div className='buttons flex gap-2'>
                        <button className='btn ' onClick={()=>handleMarkRead(bookClicked)}> Mark as Read</button>
                        <button className='btn btn-accent' onClick={()=>handleMarkWish(bookClicked)}> Add to Wishlist</button>

                     </div>

                </div>



            </div>
            
        </div>
    );
};

export default BookDetail;