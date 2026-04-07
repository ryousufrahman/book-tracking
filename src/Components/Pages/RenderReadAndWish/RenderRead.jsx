import React from 'react';

const RenderRead = ({readBook}) => {
    return (
        <div>
            <p>{readBook.bookName}</p>
            <img src={readBook.image} alt="" />
            
        </div>
    );
};

export default RenderRead;