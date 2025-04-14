import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../redux/cartSlice";

export default function CartPage() {
  // Verifique se estamos acessando corretamente os itens no estado
  const cartItems = useSelector((state) => state.cart.items);  // Acessando 'cart.items' corretamente
  const dispatch = useDispatch();

  // Verifique se cartItems é um array válido
  if (!Array.isArray(cartItems)) {
    return <p>Error: Cart items are not in the expected format.</p>;
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cartItems.map((item, index) => (
          <div key={index} className="flex justify-between items-center bg-gray-800 p-4 rounded mb-2">
            <span>{item.title} - ${item.price} x {item.quantity}</span>
            <button
              className="bg-red-500 hover:bg-red-600 px-3 py-1 rounded"
              onClick={() => dispatch(removeFromCart(item.id))}  // Passando o 'id' para a ação de remoção
            >
              Remove
            </button>
          </div>
        ))
      )}
    </div>
  );
}
