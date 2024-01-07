import React,{useState} from 'react'

import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import CartProvider from './store/CartProvider';
function App() {
  const [isVisible,setIsVisible]=useState(false);
  const showCartHandler=props=>{
    setIsVisible(true);
  }
  const hideCartHandler=props=>{
    setIsVisible(false);
  }
  return (
    <CartProvider>
      {isVisible && <Cart onClose={hideCartHandler}/>}
      <Header onShowCart={showCartHandler}/>
      <main>
          <Meals/>
      </main>
    </CartProvider>
  
  );
}

export default App;
