import React from 'react';
import { useContext } from 'react';
import { BookContext } from '../../GlobalContext';
import RenderRead from './RenderReadAndWish/RenderRead';
import RenderWish from './RenderReadAndWish/RenderWish';


const ListedBook = () => {
    const listedBookRead = useContext(BookContext);
    const {markRead , toggleRead ,setToggleRead , markWish} =listedBookRead

    return (
        <div className='max-w-300 mx-auto mt-5'>
            <div className='buttons  flex gap-2 '>



                <button className={`btn ${toggleRead =='read' ? 'btn-success' : 'btn'}`} onClick={()=>setToggleRead('read')}>Read List</button>
                <button className={`btn ${toggleRead =='wish' ? 'btn-success' : 'btn'}`} onClick={()=>setToggleRead('wish')}>Wish List</button>
                 

            </div>
            <div className='mt-8'>
               {
               
              toggleRead =='read' ? markRead.map((readBook , index) => <RenderRead key={index} readBook={readBook}></RenderRead> ) : null
                
                
               } 
               {
                markRead.length ==0 && toggleRead =='read' ? <h2 className='font-bold text-3xl text-center'>Read List is empty</h2> : ''
               }
            </div> 
            <div>

                {
                    toggleRead =='wish' ? markWish.map((wishbook , index) => <RenderWish wishBook={wishbook}></RenderWish> ): null
                }
                {
                    markWish.length ==0 && toggleRead =='wish' ? <h2 className='font-bold text-3xl text-center'>Wish List is empty</h2> : ''
                }
               
            </div>
        </div>
    );
};

export default ListedBook;