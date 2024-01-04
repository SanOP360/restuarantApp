import React from "react";
import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealForm from "./MealForm";
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
  {
    id: "m3",
    name: "Pizza",
    description: "Delicious Pizza",
    price: 899,
  },
  {
    id: "m4",
    name: "Pasta",
    description: "Classic Pasta",
    price: 599,
  },
  {
    id: "m5",
    name: "Burger",
    description: "Juicy Burger",
    price: 749,
  },
  {
    id: "m6",
    name: "Sushi",
    description: "Fresh Sushi",
    price: 1299,
  },
  {
    id: "m7",
    name: "Salad",
    description: "Healthy Salad",
    price: 499,
  },
  {
    id: "m8",
    name: "Tanduri Chicken",
    description: "Smoky Flavours",
    price: 1599,
  },
];

const AvailableMeals = () => {
  const mealsList = DummyMeals.map((meal) => (
    <li className={classes.mealList} key={meal.id}>
      <div className={classes.list}>
        <span className={classes.mealName}>{meal.name}</span>
        <span className={classes.mealDesc}>{meal.description}</span>
        <span className={classes.mealPrice}> {meal.price} Rs</span>
      </div>
      
        <MealForm></MealForm>
      
    </li>
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
