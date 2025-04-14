import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../redux/cartSlice";
import { useState } from "react";
import { toast } from "react-toastify";

export default function CartPage() {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    toast.success(`${product.title} added to cart!`);
  };

  const handleRemoveFromCart = (itemId) => {
    dispatch(removeFromCart(itemId));
  };

  const handleCheckout = () => {
    if (!user) {
      // Se o usuário não estiver autenticado, redireciona para o login
      navigate("/login");
    } else {
      // Finaliza a compra e mostra a notificação de sucesso
      toast.success("Purchase completed successfully!");
    }
  };

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
              onClick={() => handleRemoveFromCart(item.id)}
            >
              Remove
            </button>
          </div>
        ))
      )}
      <button
        onClick={handleCheckout}
        className="mt-4 bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded text-white"
      >
        Checkout
      </button>
    </div>
  );
}
