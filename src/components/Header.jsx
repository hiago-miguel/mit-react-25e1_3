// import { Link } from "react-router-dom";
// import { useSelector } from "react-redux";

// export default function Header() {
//   const cart = useSelector((state) => state.cart);

//   return (
//     <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
//       <nav className="space-x-4">
//         <Link to="/">Home</Link>
//         <Link to="/catalog">Catalog</Link>
//         <Link to="/cart">Cart ({cart.length})</Link>
//         <Link to="/checkout">Checkout</Link>
//       </nav>
//     </header>
//   );
// }
import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ user, onLogout }) => {
  // Verifica se o user existe antes de tentar acessar propriedades
  const userName = user ? user.name : null;

  return (
    <header className="bg-gray-800 p-4">
      <div className="flex justify-between items-center">
        <Link to="/" className="text-xl text-white">My Shop</Link>
        <nav className="flex gap-4">
          <Link to="/catalog" className="text-white">Catalog</Link>
          <Link to="/cart" className="text-white">Cart</Link>
          {user ? (
            <>
              <span className="text-white">Hello, {userName}</span>
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

