// src/components/ProductCard.jsx
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Importa o CSS do Toastify

export default function ProductCard({ product }) {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    toast.success(`${product.name} adicionado ao carrinho!`, {
      position: "top-right",    // Posição da notificação
      autoClose: 3000,          // Tempo de exibição da notificação
      hideProgressBar: true,    // Oculta a barra de progresso
      closeOnClick: true,       // Fecha ao clicar
      pauseOnHover: true,       // Pausa ao passar o mouse
      draggable: true,          // Permite arrastar
    });
  };

  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow hover:shadow-lg transition-all">
      <img src={product.image} alt={product.name} className="w-full h-32 object-cover rounded" />
      <h2 className="text-xl mt-2 font-semibold">{product.name}</h2>
      <p className="text-sm text-gray-400">{product.description}</p>
      <p className="text-lg font-bold mt-2">R$ {product.price.toFixed(2)}</p>
      <button
        onClick={handleAddToCart} // Chamando a função que adiciona ao carrinho
        className="mt-3 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
      >
        Adicionar ao Carrinho
      </button>
    </div>
  );
}
