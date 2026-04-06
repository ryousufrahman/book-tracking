import React, { use } from 'react';
import RenderBook from './RenderBook';
const dataPromise = fetch('/booksData.json').then(res => res.json())

const Books = () => {
    const bookData = use(dataPromise)
    return (
        <>
          <div className='mt-5 container mx-auto'>
              <div>
                 <h2 className='text-2xl font-bold text-center'>Books</h2>
                </div>
            <div className='grid gap-4 sm:grid-cols-2 md:grid-cols-3'>
                 {
            bookData.map((book, index)=> <RenderBook key={index} book={book}></RenderBook>)
              }

             </div>



          </div>
           
        
        
        
        </>
    );
};

export default Books;