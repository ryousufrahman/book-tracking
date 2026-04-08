import React from "react";

const RenderRead = ({ readBook }) => {
  return (
    <>
      <div className="flex gap-2 rounded-2xl ">
        <div className="cart-img p-5 bg-gray-100">
          <img src={readBook.image} alt="" className="w-[100px] mx-auto" />
        </div>
        <div className="card-body">
            <div>
                <p>{readBook.bookName}</p>
                <p>by : {readBook.author}</p>
                <p>{readBook.rating}</p>
                <p>{readBook.totalPages}</p>
                <p>{readBook.category}</p>
            </div>

        </div>
      </div>
    </>
  );
};

export default RenderRead;
