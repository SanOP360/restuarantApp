import React, { useContext } from 'react';
import classes from './MealForm.module.css';

import Input from '../UI/Input';
import CartContext from '../../store/CartContext';
const MealForm = (props) => {
  const cartCtx = useContext(CartContext);
  const quantity = document.getElementById("amount" + props.id)?.value;
  const addItemHandler = (event) => {


    if (!isNaN(quantity) && quantity > 0) {
      
      cartCtx.addItem({ ...props.item, quantity: quantity });
    }
    // Inside the addItemCartHandler function
    
  };

  return (
    <form className={classes.form}>
      <Input
        label="Amount"
        input={{
          id: "amount" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />

      <button className={classes.addBtn} onClick={addItemHandler} type="button">
        + Add
      </button>
    </form>
  );
};

export default MealForm;
