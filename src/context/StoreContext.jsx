import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null)

const StoreContextProvider = (props) =>{
    const [carditem, setCarditem]= useState({});

    const addToCart= (itemId) => {
        if(!carditem[itemId]){
            setCarditem((prev) => ({...prev,[itemId]:1}))
        }else{
            setCarditem((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        }
    }

    const removeFromCart= (itemId)=>{
        setCarditem((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }


    useEffect(()=>{
        console.log(carditem)
    },[carditem]);


    const contextValue={
        food_list,
        carditem,
        setCarditem,
        addToCart,
        removeFromCart
    }

    return(
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider;