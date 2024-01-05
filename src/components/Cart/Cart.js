import React from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";

const Cart = (props) => {
  const cartItems = [{ id: "c1", name: "Chicken", amount: 2, price: 1222 }].map(
    (item) => <li key={item.id}>{item.name}</li>
  );

  return (
    <Modal onClose={props.onClose}>
      <ul className={classes["cart-item"]}>{cartItems}</ul>

      <div className={classes.total}>
        <span>Total Amount</span>
        <span>344</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button-alt"]} onClick={props.onClose}>Close</button>
        <button className={classes.orderBtn}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
