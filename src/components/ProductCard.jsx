// src/components/ProductCard.jsx
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ProductCard({ product }) {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    toast.success(`${product.title} adicionado ao carrinho!`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow hover:shadow-lg transition-all flex flex-col">
      <div className="w-full h-64 bg-gray-900 flex items-center justify-center overflow-hidden rounded">
        <img
          src={product.image}
          alt={product.title}
          className="object-contain h-full max-w-full"
        />
      </div>
      <h2 className="text-xl mt-2 font-semibold">{product.title}</h2>
      <p className="text-sm text-gray-400">{product.description}</p>
      <p className="text-lg font-bold mt-2">$ {Number(product.price).toFixed(2)}</p>
      <button
        onClick={handleAddToCart}
        className="mt-3 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
      >
        Adicionar ao Carrinho
      </button>
    </div>
  );
}
