// React Libs
import { useEffect } from "react";
import { Provider, useDispatch } from "react-redux";
// React Router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Redux and Services
import store from "./redux/store";
import { login } from "./redux/authSlice";
import AuthService from "./services/AuthService";
// Global Components
import Header from "./components/Header";
import PrivateRoute from "./components/PrivateRoute";
import Footer from "./components/Footer";
// Pages
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import CatalogPage from "./pages/CatalogPage";
import ProfilePage from "./pages/ProfilePage";
import CartPage from "./pages/CartPage";
// UI Libs
import { ToastContainer } from "react-toastify";


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
        <Route path="/catalog" element={<CatalogPage />} />
        <Route element={<PrivateRoute />}>
          <Route path="/profile" element={<ProfilePage />} />
        </Route>
        <Route path="/cart" element={<CartPage />} />
      </Routes>
      <Footer />
      <ToastContainer />
    </>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <div className="min-h-screen bg-gray-900 text-white flex flex-col">
        <Router>
          <AppContent />
        </Router>
      </div>
    </Provider>
  );
}
