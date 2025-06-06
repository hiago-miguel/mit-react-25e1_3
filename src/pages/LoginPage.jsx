import { useState } from "react";
import AuthService from "../services/AuthService";
import { useDispatch } from "react-redux";
import { login } from "../redux/authSlice";
import { useNavigate, useLocation } from "react-router-dom";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/catalog";

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const user = await AuthService.authenticate(email, password);

      if (user) {
        dispatch(login(user));
        setSuccess(true);
        setMessage("Login realizado com sucesso!");
        setTimeout(() => navigate(from), 1000);
      } else {
        throw new Error();
      }
    } catch (error) {
      setSuccess(false);
      setMessage("Erro ao fazer login. Verifique suas credenciais.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white transition-all duration-500">
      <form onSubmit={handleSubmit} className="bg-gray-800 p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

        <label className="block mb-2 text-sm font-medium">Email</label>
        <input
          type="email"
          className="w-full p-2 mb-4 rounded bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label className="block mb-2 text-sm font-medium">Senha</label>
        <input
          type="password"
          className="w-full p-2 mb-6 rounded bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 transition-colors p-2 rounded font-semibold"
        >
          Entrar
        </button>

        {message && (
          <div
            className={`mt-4 text-center transition-all duration-300 ${
              success ? "text-green-400" : "text-red-400"
            }`}
          >
            {message}
          </div>
        )}
      </form>
    </div>
  );
}
