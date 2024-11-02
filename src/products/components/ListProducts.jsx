import "./ListProducts.css";
import { useCart } from "../../cart/Hooks/useCart";

export function ListProducts({ products }) {
  console.log(products);
  const { addToCart, removeFromCart, cart } = useCart();
  const checkProductInCart = (id) => {
    return cart.some((item) => item.id === id);
  };
  return (
    <main className="products">
      <ul>
        {products.map(({ id, image, title, price }) => {
          const isProductInCart = checkProductInCart(id);
          return (
            <li key={id}>
              <img src={image} alt={title} />
              <div>
                <strong>{title}</strong> - ${price}
              </div>
              <div>
                <button
                  className="cart-buton"
                  onClick={() =>
                    isProductInCart
                      ? removeFromCart(id)
                      : addToCart({ id, image, title, price })
                  }
                >
                  {isProductInCart ? "Remove" : "Add cart"}
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
