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


    /* useEffect(()=>{
        console.log(carditem)
    },[carditem]); */

    const getTotalAmount=() =>{
        let totalAmount=0;
        for(const item in carditem){
            if(carditem[item]>0){
                let itemInfo = food_list.find((product)=> product._id ===item);
                totalAmount+=itemInfo.price* carditem[item];

            }
            
        }
        return totalAmount
    }


    const contextValue={
        food_list,
        carditem,
        setCarditem,
        addToCart,
        removeFromCart,
        getTotalAmount
    }

    return(
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider;