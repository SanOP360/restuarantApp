import {Fragment} from 'react'
import meals from '../../assets/meals.jpg'

import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';
const Header=(props)=>{
   return (<Fragment>
       <header className={classes.header}>
        <h1>React Meals</h1>
        <HeaderCartButton onClick={props.onShowCart}/>
       </header>

       <div className={classes['main-image']}>
        <img src={meals} alt="A full of delicious food" />

        
       </div>

    </Fragment>
   )}

export default Header;