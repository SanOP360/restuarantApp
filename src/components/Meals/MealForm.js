import React, { useState } from 'react';
import classes from './MealForm.module.css';

import Input from '../UI/Input';

const MealForm = () => {
   const [inputVal, setInputVal] = useState('1');
   const handleInputChange = (event) => {
    const newVal=event.target.value;
    
      setInputVal(newVal);
    
     
   };
 
  const addHandler=()=>{
    if(inputVal<5){
      setInputVal(String(Number(inputVal) + 1));
    }
    
  }
  
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
          value:inputVal,
          onchange:handleInputChange
          
        }}
      />

      <button className={classes.addBtn} type="button" onClick={addHandler} >
        + Add
      </button>
    </form>
  );
};

export default MealForm;
