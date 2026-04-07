import React from 'react';
import { useContext } from 'react';
import { BookContext } from '../../GlobalContext';
import RenderRead from './RenderReadAndWish/RenderRead';

const ListedBook = () => {
    const listedBookRead = useContext(BookContext);
    const {markRead} =listedBookRead

    return (
        <div className='max-w-300 mx-auto mt-5'>
            <div className='buttons  flex gap-2 '>
                <button className='btn btn-success'>Read List</button>
                <button className='btn btn-accent'>Wish List</button>
                 

            </div>
            <div>
               {
                markRead.map((readBook , index) => <RenderRead key={index} readBook={readBook}></RenderRead> )
               } 
            </div> 
        </div>
    );
};

export default ListedBook;