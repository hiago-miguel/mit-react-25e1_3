import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'; // Usando useSelector do Redux

const Header = () => {
  // Acessando o user diretamente do Redux
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
              <button onClick={() => dispatch(logout())} className="text-white">Logout</button>
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
