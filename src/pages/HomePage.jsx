import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-4">Bem-vindo à Aplicação</h1>
      <p className="text-lg mb-8">Acesse seu painel com suas credenciais.</p>
      <Link
        to="/login"
        className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded text-white font-medium transition-colors"
      >
        Fazer Login
      </Link>
    </div>
  );
}
