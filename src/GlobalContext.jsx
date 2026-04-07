import React, { createContext, useState } from 'react';
export const BookContext = createContext()
const GlobalContext = ({children}) => {
    const [markRead , setMarkRead] =useState([]) 
    const readStatus ={
        markRead ,
        setMarkRead
    }

    return <BookContext.Provider value={readStatus}>
        {children}
    </BookContext.Provider>
    ;
};

export default GlobalContext;