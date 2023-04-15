import { Fragment } from "react";

import HeaderCartButton from "./HeaderCartButton";
import mealsImage from "../../assets/meals.jpg";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="A table full of delicious food!" />
      </div>
    </Fragment>
  );
};

export default Header;

// The import statements import required dependencies, which are Fragment from 'react', HeaderCartButton component, mealsImage from a local image file and a classes object from a local css file.

// The Header component is defined which takes props as an argument.

// The return statement returns a JSX block wrapped in a Fragment component, which is used instead of a div to avoid extra markup.

// Inside the JSX block, there is a header element with a class of header and two child elements:

// The first child is a h1 element with the text 'ReactMeals'.

// The second child is a HeaderCartButton component which is rendered with the onClick prop set to props.onShowCart.

// After the header element, there is a div element with a class of main-image containing an img element that displays the mealsImage.

// The component is then exported as the default export.
