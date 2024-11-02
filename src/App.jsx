import "./App.css";
import { Cart } from "./cart/Cart";
import { Products } from "./products/Products";
import { CartProvider } from "./cart/CartProvider";

function App() {
  return (
    <CartProvider>
      <Cart />
      <Products />
    </CartProvider>
  );
}

export default App;
