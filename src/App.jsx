import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useEffect } from "react";
import { Provider, useDispatch } from "react-redux";
import store from "./redux/store";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import Dashboard from "./pages/Dashboard";
import CatalogPage from "./pages/CatalogPage";
import ProfilePage from "./pages/ProfilePage";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import Header from "./components/Header";
import AuthService from "./services/AuthService";
import { setUser } from "./redux/actions"; // Adicione a ação setUser
import { ToastContainer } from "react-toastify";  

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchUser = async () => {
      const authUser = await AuthService.getCurrentUser();
      if (authUser) {
        dispatch(setUser(authUser));  // Salve o usuário no Redux
      }
    };
    fetchUser();
  }, [dispatch]);  

  const handleLogin = async (credentials) => {
    const loggedUser = await AuthService.login(credentials);
    dispatch(setUser(loggedUser));  // Atualize o usuário no Redux após login
  };

  const handleLogout = () => {
    AuthService.logout();
    dispatch(setUser(null)); // Limpe o usuário do Redux ao fazer logout
  };

  return (
    <Provider store={store}>
      <Router>
        <div className="min-h-screen bg-gray-900 text-white">
          <Header onLogout={handleLogout} />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
            <Route
              path="/profile"
              element={<ProfilePage />}
            />
            <Route path="/catalog" element={<CatalogPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
          </Routes>
        </div>
        <ToastContainer />
      </Router>
    </Provider>
  );
}
