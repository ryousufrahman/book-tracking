import React from 'react';
import { Link } from 'react-router';

const RenderBook = ({book}) => {
    const badge = book.tags;
    return (
        <>
         <Link to={`bookDetails/${book.bookId}`} className='main-card p-3 rounded-2xl shadow space-y-4'>
            <div className='card-img  rounded-2xl bg-gray-100 py-5'>
                <img src={book.image} alt={book.bookName}  className='h-[150px] mx-auto'/>
            </div>
            <div className='badges'>
                {
                    badge.map(tag => <div  className="badge badge-success mr-1">{tag}</div>)
                }

            </div>
            <div className='name space-y-4'>
                <h2 className='font-bold text-2xl'>{book.bookName}</h2>
                <p className='text-gray-500'>By: {book.author}</p>

            </div>
              <div className="divider"></div>
              <div className='cart-footer flex justify-between'>
                <p className='font-bold'>{book.category}</p>
                <p className='font-semibold'>{book.rating}</p>

              </div>
            

         </Link>
        
        </>
    );
};

export default RenderBook;