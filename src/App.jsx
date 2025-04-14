// import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
// import { useEffect, useState } from "react";
// import { Provider } from "react-redux";
// import store from "./redux/store";
// import LoginPage from "./pages/LoginPage";
// import HomePage from "./pages/HomePage";
// import Dashboard from "./pages/Dashboard";
// import AuthService from "./services/AuthService";
// import Header from "./components/Header";
// import CartPage from "./pages/CartPage";
// import CheckoutPage from "./pages/CheckoutPage";

// export default function App() {
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     const fetchUser = async () => {
//       const authUser = await AuthService.getCurrentUser();
//       setUser(authUser);
//     };
//     fetchUser();
//   }, []);

//   const handleLogin = async (credentials) => {
//     const loggedUser = await AuthService.login(credentials);
//     setUser(loggedUser);
//   };

//   const handleLogout = () => {
//     AuthService.logout();
//     setUser(null);
//   };

//   return (
//     <Provider store={store}>
//       <Router>
//         <Routes>
//           <Route path="/" element={<HomePage />} />
//           <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
//           <Route
//             path="/dashboard"
//             element={user ? <Dashboard user={user} onLogout={handleLogout} /> : <Navigate to="/login" />}
//           />
//         </Routes>
//       </Router>
//     </Provider>
//   );
// }

import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Provider } from "react-redux";
import store from "./redux/store";

import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import Dashboard from "./pages/Dashboard";
import CatalogPage from "./pages/CatalogPage";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";

import Header from "./components/Header";
import AuthService from "./services/AuthService";

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
          <Header user={user} onLogout={handleLogout} />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
            <Route path="/dashboard" element={user ? <Dashboard user={user} onLogout={handleLogout} /> : <Navigate to="/login" />} />
            <Route path="/catalog" element={<CatalogPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}
