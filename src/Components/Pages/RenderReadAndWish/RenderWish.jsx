import React from 'react';

const RenderWish = ({wishBook}) => {
    return (
        <div>
            <p>{wishBook.bookName}</p>
        </div>
    );
};

export default RenderWish;