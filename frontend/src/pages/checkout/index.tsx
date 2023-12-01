import { ShopContext } from "@/contextes/ShopContext";
import { formatAmount } from "@/lib/utilities";
import { useContext } from "react";

function Checkout() {
  const { cart, addToCart, removeFromCart, deleteFromCart } =
    useContext(ShopContext);
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Produit</th>
            <th>Quantité</th>
            <th>Prix</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {cart.map((e) => (
            <tr key={e.productId}>
              <th scope="row">{e.title}</th>
              <td>
                <button
                  disabled={e.quantity === 1}
                  onClick={() => removeFromCart(e.productId)}
                >
                  -
                </button>
                {e.quantity}
                <button
                  onClick={() => addToCart(e.productId, e.title, e.price)}
                >
                  +
                </button>
              </td>
              <td>{formatAmount(e.price * e.quantity)}</td>
              <td>
                <button onClick={() => deleteFromCart(e.productId)}>
                  Supprimer
                </button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <th colSpan={2} scope="row">
              Total
            </th>
            <td>
              {formatAmount(
                cart.reduce((prev, curr) => {
                  return prev + curr.price * curr.quantity;
                }, 0)
              )}
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}

export default Checkout;
