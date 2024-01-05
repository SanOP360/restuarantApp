import React,{Fragment,useState} from 'react'

import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
function App() {
  const [isVisible,setIsVisible]=useState(false);
  const showCartHandler=props=>{
    setIsVisible(true);
  }
  const hideCartHandler=props=>{
    setIsVisible(false);
  }
  return (
    <Fragment>
      {isVisible && <Cart onClose={hideCartHandler}/>}
      <Header onShowCart={showCartHandler}/>
      <main>
          <Meals/>
      </main>
    </Fragment>
  
  );
}

export default App;
