import { useState } from "react";
import Header from "./components/Layout/Header";
import Chickens from "./components/Chickens/Chickens";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";
function App() {
  const [cartIsShow,setCartIsShow] = useState(false);

  const showCartHandler = () =>{
    setCartIsShow(true);
  };

  const hideCartHandler = ()=>{
    setCartIsShow(false);
  };

  return (
    <CartProvider>
      {cartIsShow && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler}/>
      <main>
        <Chickens/>
      </main>
    </CartProvider>
  );
}

export default App;
