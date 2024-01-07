import React, { useContext, useState } from "react";
import classes from "./MealForm.module.css";
import Input from "../UI/Input";
import CartContext from "../../store/CartContext";

const MealForm = (props) => {
  const cartCtx = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);

  const inputChangeHandler = (event) => {
    setQuantity(+event.target.value); 
  };

  const addItemHandler = () => {
    if (!isNaN(quantity) && quantity > 0) {
      cartCtx.addItem({ ...props.item, quantity: quantity });
    }
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
          value: quantity.toString(), 
          onChange: inputChangeHandler,
        }}
      />
      <button className={classes.addBtn} onClick={addItemHandler} type="button">
        + Add
      </button>
    </form>
  );
};

export default MealForm;
