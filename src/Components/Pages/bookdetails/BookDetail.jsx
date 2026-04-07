import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const BookDetail = () => {
    const {bookId} = useParams()
    const books = useLoaderData()
    console.log(books , bookId);

    const bookClicked = books.find(cbook => cbook.bookId == bookId)
    
    
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
                        <button className='btn btn-ghost'>Read</button>
                        <button className='btn btn-accent'>Wishlist</button>

                     </div>

                </div>



            </div>
            
        </div>
    );
};

export default BookDetail;