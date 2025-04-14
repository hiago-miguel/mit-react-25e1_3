import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { Provider, useDispatch } from "react-redux";
import store from "./redux/store";
import { login } from "./redux/authSlice";
import AuthService from "./services/AuthService";
import { ToastContainer } from "react-toastify";

import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import CatalogPage from "./pages/CatalogPage";
import ProfilePage from "./pages/ProfilePage";
import CartPage from "./pages/CartPage";
import Header from "./components/Header";

function AppContent() {
  const dispatch = useDispatch();

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      dispatch(login(storedUser));
    }
  }, [dispatch]);

  const handleLogin = async (credentials) => {
    const user = await AuthService.authenticate(
      credentials.email,
      credentials.password
    );
    dispatch(login(user));
  };

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <div className="min-h-screen bg-gray-900 text-white">
        <Router>
          <AppContent />
        </Router>
      </div>
    </Provider>
  );
}
