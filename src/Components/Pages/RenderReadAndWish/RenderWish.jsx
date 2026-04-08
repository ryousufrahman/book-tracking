import React from 'react';

const RenderWish = ({wishBook}) => {
    return (
        <div>
             <div className="flex gap-2 rounded-2xl ">
        <div className="cart-img p-5 bg-gray-100">
          <img src={wishBook.image} alt="" className="w-[100px] mx-auto" />
        </div>
        <div className="card-body">
            <div>
                <p>{wishBook.bookName}</p>
                <p>by : {wishBook.author}</p>
                <p>{wishBook.rating}</p>
                <p>{wishBook.totalPages}</p>
                <p>{wishBook.category}</p>
            </div>

        </div>
      </div>
        </div>
    );
};

export default RenderWish;