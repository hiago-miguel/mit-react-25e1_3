import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import Dashboard from "./pages/Dashboard";
import CatalogPage from "./pages/CatalogPage";  // Corrigido
import ProfilePage from "./pages/ProfilePage";  // Corrigido
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import Header from "./components/Header";
import AuthService from "./services/AuthService";
import { ToastContainer } from "react-toastify";  // Adicionado corretamente

export default function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const authUser = await AuthService.getCurrentUser();
      setUser(authUser);
    };
    fetchUser();
  }, []);

  const handleLogin = async (credentials) => {
    const loggedUser = await AuthService.login(credentials);
    setUser(loggedUser);
  };

  const handleLogout = () => {
    AuthService.logout();
    setUser(null);
  };

  return (
    <Provider store={store}>
      <Router>
        <div className="min-h-screen bg-gray-900 text-white">
          <Header user={user} onLogout={handleLogout} />  {/* O Header deve ser renderizado corretamente */}
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
            <Route
              path="/dashboard"
              element={user ? <Dashboard user={user} onLogout={handleLogout} /> : <Navigate to="/login" />}
            />
            <Route
              path="/profile"
              element={user ? <ProfilePage /> : <Navigate to="/login" />}
            />
            <Route path="/catalog" element={<CatalogPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/checkout" element={user ? <CheckoutPage /> : <Navigate to="/login" />} />
          </Routes>
        </div>
        <ToastContainer />  {/* Aqui a notificação de toast será exibida */}
      </Router>
    </Provider>
  );
}
