import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-4">Bem-vindo à Game Store!</h1>
      <p className="text-lg mb-8">Acesse o nosso catálogo com os melhores preços do mercado!.</p>
      <Link
        to="/catalog"
        className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded text-white font-medium transition-colors"
      >
        Catálogo
      </Link>
    </div>
  );
}
