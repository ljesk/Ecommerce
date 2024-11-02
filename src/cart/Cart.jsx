import { useState } from "react";
import "./Cart.css";
import { useCart } from "./Hooks/useCart";

function CartItem({ image, price, title, quantity, addToCart }) {
  return (
    <li>
      <img src={image} alt={title} />
      <div>
        <strong>{title}</strong> - ${price}
      </div>

      <footer>
        <small>Qty: {quantity}</small>
        <button onClick={addToCart}>+</button>
      </footer>
    </li>
  );
}

export function Cart() {
  const { cart, clearCart, addToCart } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen((prev) => !prev);
  };
  return (
    <>
      <button className="cart-button" onClick={toggleCart}>
        Cart
      </button>

      {isCartOpen && (
        <aside className="cart">
          <button className="clear-cart" onClick={clearCart}>
            Clear cart
          </button>
          <ul>
            {cart.map((product) => (
              <CartItem
                key={product.id}
                addToCart={() => addToCart(product)}
                {...product}
              />
            ))}
          </ul>
        </aside>
      )}
    </>
  );
}
