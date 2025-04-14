import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromCart, updateQuantity, clearCart } from "../redux/cartSlice";
import { addOrder } from "../redux/ordersSlice";
import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom"; // Import useNavigate

export default function CartPage() {
  const cartItems = useSelector((state) => state.cart.items); // Access cart items
  const user = useSelector((state) => state.auth.user); // Access the authenticated user
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Hook for navigation
  // const [loading, setLoading] = useState(false);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    toast.success(`${product.name} added to cart!`);
  };

  const handleRemoveFromCart = (itemId) => {
    dispatch(removeFromCart(itemId));
  };

  const handleIncreaseQuantity = (itemId) => {
    dispatch(updateQuantity({ id: itemId, quantity: 1 }));
  };

  const handleDecreaseQuantity = (itemId) => {
    const item = cartItems.find((item) => item.id === itemId);
    if (item.quantity > 1) {
      dispatch(updateQuantity({ id: itemId, quantity: -1 }));
    }
  };

const handleCheckout = () => {
  if (cartItems.length === 0) {
    toast.error("Your cart is empty. Add some items to proceed with checkout.");
    return;
  }

  if (!user) {
    toast.error("You need to log in before completing your purchase!");
    navigate("/login");
  } else {
    const newOrder = {
      id: Date.now(),
      date: new Date().toISOString().split("T")[0],
      total,
      items: cartItems,
    };

    dispatch(addOrder(newOrder));
    dispatch(clearCart());
    toast.success("Purchase completed successfully!");

    setTimeout(() => {
      navigate("/profile");
    }, 1500);
  }
};

  // Calculate total price
  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cartItems.map((item, index) => (
          <div key={index} className="flex justify-between items-center bg-gray-800 p-4 rounded mb-2">
            <span>{item.name} - ${item.price} x {item.quantity}</span>
            <div className="flex items-center">
              <button
                onClick={() => handleDecreaseQuantity(item.id)}
                className="bg-yellow-500 hover:bg-yellow-600 text-white px-2 py-1 rounded mx-1"
              >
                -
              </button>
              <span className="mx-2">{item.quantity}</span>
              <button
                onClick={() => handleIncreaseQuantity(item.id)}
                className="bg-yellow-500 hover:bg-yellow-600 text-white px-2 py-1 rounded mx-1"
              >
                +
              </button>
            </div>
            <button
              className="bg-red-500 hover:bg-red-600 px-3 py-1 rounded"
              onClick={() => handleRemoveFromCart(item.id)}
            >
              Remove
            </button>
          </div>
        ))
      )}
      
      {/* Display the total */}
      <div className="mt-4 text-xl font-semibold">
        <p>Total: R$ {total}</p>
      </div>

      <button
        onClick={handleCheckout}
        className="mt-4 bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded text-white"
      >
        Checkout
      </button>
    </div>
  );
}
