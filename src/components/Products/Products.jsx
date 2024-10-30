import "./Products.css";

export function Products({ products }) {
  return (
    <main className="products">
      <ul>
        {products.map(({ id, image, title, price }) => {
          return (
            <li key={id}>
              <img src={image} alt={title} />
              <div>
                <strong>{title}</strong> - ${price}
              </div>
              <div>
                <button className="cart-button">cart</button>
              </div>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
