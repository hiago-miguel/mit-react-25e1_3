import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function ProfilePage() {
  const user = useSelector((state) => state.auth.user); // Acessando o usuário logado
  const orders = [
    { id: 1, date: "2025-04-01", total: 100.0 },
    { id: 2, date: "2025-04-05", total: 50.0 },
  ]; // Mock de pedidos

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Profile</h1>
      {user ? (
        <div>
          <h2 className="text-xl">Hello, {user.name}!</h2>
          <p>Email: {user.email}</p>
          <h3 className="mt-6">Order History:</h3>
          <ul>
            {orders.map((order) => (
              <li key={order.id} className="bg-gray-800 p-4 rounded mb-2">
                <p>Order ID: {order.id}</p>
                <p>Date: {order.date}</p>
                <p>Total: ${order.total}</p>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>You need to log in to view your profile.</p>
      )}
      <Link to="/login" className="text-blue-500">Login</Link>
    </div>
  );
}
