import { useState } from "react";

import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;

// This is a code snippet in JavaScript using the React library that defines the App component, which is the main component of the application.

// The App component renders the Header, Meals, and Cart components. The Cart component is only shown when cartIsShown state is set to true.

// The useState hook is used to manage the state of the cartIsShown variable. The showCartHandler function sets the cartIsShown state to true when called, and the hideCartHandler function sets it to false when called.

// The CartProvider component is used to wrap the child components of the App component, providing the shopping cart context to them. The CartProvider component is defined in a separate file and exported to be imported here.

// The Header component is rendered with a onShowCart prop that is set to the showCartHandler function. The Meals component is rendered in the main section of the application.

// Finally, the Cart component is conditionally rendered using the logical AND operator (&&) and is passed an onClose prop that is set to the hideCartHandler function.
