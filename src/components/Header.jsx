// src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../redux/authSlice';

const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <header className="bg-gray-800 p-4">
      <div className="flex justify-between items-center">
      <Link to="/" className="flex items-center">
          <img
            src="/logo.png" // Update with correct path
            alt="GameStore Logo"
            className="w-16 h-16 mr-2" // Adjust size as needed
          />
          <span className="text-xl text-white">AllMart</span>
        </Link>
        <nav className="flex gap-4">
          <Link to="/catalog" className="text-white">Catálogo</Link>
          <Link to="/cart" className="text-white">Carrinho</Link>
          {user ? (
            <>
              <Link to="/profile" className="text-white hover:underline">
                Hello, {user.name || user.email}
              </Link>
              <button onClick={handleLogout} className="text-white">Sair</button>
            </>
          ) : (
            <Link to="/login" className="text-white">Entrar</Link>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
