import classes from "./CartItem.module.css";

const CartItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;

  return (
    <li className={classes["cart-item"]}>
      <div>
        <h2>{props.name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>{price}</span>
          <span className={classes.amount}>x {props.amount}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={props.onRemove}>−</button>
        <button onClick={props.onAdd}>+</button>
      </div>
    </li>
  );
};

export default CartItem;

// This code defines a React functional component CartItem that represents a single item in the shopping cart.

// The component takes in several props:

// name: the name of the item
// amount: the quantity of the item in the cart
// price: the price of the item
// onRemove: a function to handle removing the item from the cart
// onAdd: a function to handle adding more of the item to the cart
// Inside the component, the price is formatted to a string with two decimal places using the toFixed() method. The li element contains the name, price, quantity, and action buttons of the item. The actions div contains two buttons for removing and adding the item to the cart. The onClick props of the buttons are bound to the onRemove and onAdd props, respectively.

// The CSS styles for the component are imported from the CartItem.module.css file.
