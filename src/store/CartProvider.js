import React, { useState } from 'react'
import CartContext from './CartContext'
const CartProvider=(props)=>{
    const [items,updateItems]=useState([]);
    const addItemCartHandler= item=>{
        updateItems([...items,item])
             
    }
    const removeItemHandler=id=>{
        
    }
    const cartContext={
        items:items,
        addItem:addItemCartHandler,
        removeItem:removeItemHandler,
    }
    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>

}

export default CartProvider