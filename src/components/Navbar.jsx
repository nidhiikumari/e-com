import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { products } from './newproduct';
import {ContextCart} from './ContextCart';
import { reducer } from './reducer';

export const CartContext = createContext();
const initialState = {
    item: products,
    totalAmount: 0,
    totalItem: 0,
   
};


const Navbar = () => {

    const [state, dispatch] = useReducer(reducer, initialState );

    
// to delete individual iteems
    const removeItem = (id) => {
        return dispatch({
            type:"Remove_ITEM",
            payload: id,
        });

    };

    // increment the  items
    const increament = (id) => {
        return dispatch({
            type: "INCREAMENT",
            payload: id,
        });

    };

    // decreament item 
    const decreament = (id) => {
        return  dispatch({
            type : "DECREAMENT",
            payload: id,
        });
    };

    // useeffect to update the data
    useEffect(() => {
        dispatch({type: "GET_TOTAL"});

       
    }, [state, item])

    return (
        <div>
            <CartContext.Provider value={{...state, removeItem, clearCart, increament, decreament}}>
            <ContextCart/>

            </CartContext.Provider>
            
           
        </div>



    );
};

export default Navbar;
