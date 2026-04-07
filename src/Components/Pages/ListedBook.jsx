import React from 'react';
import { useContext } from 'react';
import { BookContext } from '../../GlobalContext';
import RenderRead from './RenderReadAndWish/RenderRead';

const ListedBook = () => {
    const listedBookRead = useContext(BookContext);
    const {markRead} =listedBookRead

    return (
        <div>
            <div>
               {
                markRead.map((readBook , index) => <RenderRead key={index} readBook={readBook}></RenderRead> )
               } 
            </div> 
        </div>
    );
};

export default ListedBook;