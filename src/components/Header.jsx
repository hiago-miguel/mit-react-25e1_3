import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'; // Use useDispatch and useSelector from Redux
import { logout } from '../redux/actions'; // Import logout action

const Header = ({ onLogout }) => { // Accept onLogout from App.jsx

  const user = useSelector((state) => state.auth.user);

  return (
    <header className="bg-gray-800 p-4">
      <div className="flex justify-between items-center">
        <Link to="/" className="text-xl text-white">My Shop</Link>
        <nav className="flex gap-4">
          <Link to="/catalog" className="text-white">Catalog</Link>
          <Link to="/cart" className="text-white">Cart</Link>
          {user ? (
            <>
              <span className="text-white">
                <Link to="/profile" className="text-white hover:underline">
                  Hello, {user.name || user.email}
                </Link>
              </span>
              <button onClick={onLogout} className="text-white">Logout</button>
            </>
          ) : (
            <Link to="/login" className="text-white">Login</Link>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
