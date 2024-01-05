import React, { useState } from 'react';
import classes from './MealForm.module.css';

import Input from '../UI/Input';

const MealForm = () => {
  const [initialVal, setInitialVal] = useState('1');

  const addMealHandler = () => {
    setInitialVal()
  };

  return (
    <form className={classes.form}>
      <Input
        label="Amount"
        input={{
          id: 'amount',
          type: 'number',
          min: '1',
          max: '5',
          step: '1',
          defaultValue: initialVal,
        }}
      />

      <button className={classes.addBtn} type="button" onClick={addMealHandler}>
        + Add
      </button>
    </form>
  );
};

export default MealForm;
