import { useContext, useEffect, useState } from "react";

import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
  const cartCtx = useContext(CartContext);

  const { items } = cartCtx;

  const numberOfCartItems = items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  const btnClasses = `${classes.button} ${
    btnIsHighlighted ? classes.bump : ""
  }`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnIsHighlighted(true);

    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;

// This is a React component called HeaderCartButton that renders a button with a shopping cart icon and a badge indicating the number of items in the cart. Here's a breakdown of the code:

// import { useContext, useEffect, useState } from 'react'; imports the necessary React hooks.
// import CartIcon from '../Cart/CartIcon'; imports the CartIcon component used as the icon inside the button.
// import CartContext from '../../store/cart-context'; imports the context created to manage the cart items.
// const HeaderCartButton = (props) => { ... } defines the HeaderCartButton component that accepts props.
// const [btnIsHighlighted, setBtnIsHighlighted] = useState(false); declares a state variable btnIsHighlighted and its associated updater function setBtnIsHighlighted. It's used to apply a CSS class to the button when it is clicked.
// const cartCtx = useContext(CartContext); uses the useContext hook to get access to the CartContext created previously.
// const { items } = cartCtx; destructures the items property from the context object.
// const numberOfCartItems = items.reduce((curNumber, item) => { ... }, 0); calculates the total number of items in the cart by reducing the items array.
// const btnClasses = ${classes.button} ${btnIsHighlighted ? classes.bump : ''}; declares a variable btnClasses which combines the base button class with an additional bump class when the button is clicked.
// useEffect(() => { ... }, [items]); uses the useEffect hook to apply a CSS class to the button when items are added to the cart. It sets btnIsHighlighted to true, waits for 300ms using setTimeout(), and then sets btnIsHighlighted back to false.
// The return statement renders a button element with the classes defined in btnClasses. It includes three spans: one for the icon, one for the text "Your Cart", and one for the badge indicating the number of items in the cart.
