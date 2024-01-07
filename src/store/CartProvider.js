import React, { useState } from "react";
import CartContext from "./CartContext";

const CartProvider = (props) => {
  const [items, updateItems] = useState([]);

  const addItemCartHandler = (item) => {
    let foundItem = items.find((newItem) => newItem.name === item.name);

    if (foundItem === undefined) {
      
      updateItems([...items, { ...item, quantity: Number(item.quantity) }]);
    } else {
      
      foundItem.quantity += Number(item.quantity);
      updateItems([...items]);
    }
  };

  const removeItemHandler = (id) => {
    
  };

  const cartContext = {
    items: items,
    addItem: addItemCartHandler,
    removeItem: removeItemHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
