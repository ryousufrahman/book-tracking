import React, { createContext, useState } from 'react';
export const BookContext = createContext()
const GlobalContext = ({children}) => {
    const [markRead , setMarkRead] =useState([]) 
    const [markWish , setMarkWish] =useState([])
    const [toggleRead , setToggleRead] =useState('read')
    const readStatus ={
        markRead ,
        setMarkRead ,
        toggleRead , 
        setToggleRead ,
        markWish ,
        setMarkWish
    }

    return <BookContext.Provider value={readStatus}>
        {children}
    </BookContext.Provider>
    ;
};

export default GlobalContext;