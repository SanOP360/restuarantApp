import React from "react";
import classes from "./AvailableMeals.module.css";

const DummyMeals = [
  {
    id: "m1",
    name: "Chicken",
    description: "Finest Chicken",
    price: 344,
  },
  {
    id: "m2",
    name: "Biryani",
    description: "Finest Biryani",
    price: 3443,
  },
];

const AvailableMeals = () => {
  const mealsList = DummyMeals.map((meal) => (
    <li key={meal.id}>{meal.name}</li>
  ));

  return (
    <section className={classes.meals}>
      <ul>{mealsList}</ul>
    </section>
  );
};

export default AvailableMeals;
