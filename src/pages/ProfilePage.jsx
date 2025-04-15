import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function ProfilePage() {
  const user = useSelector((state) => state.auth.user);
  const allOrders = useSelector((state) => state.orders.orders);

  const userOrders = allOrders.filter((order) => order.userId === user.id);

  if (!user) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="p-6 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Profile</h1>
      <div>
        <h2 className="text-xl">Hello, {user.name}!</h2>
        <p>Email: {user.email}</p>
        <h3 className="mt-6">Order History:</h3>
        {userOrders.length === 0 ? (
          <p>You have no orders yet.</p>
        ) : (
          <ul>
            {userOrders.map((order) => (
              <li key={order.id} className="bg-gray-800 p-4 rounded mb-2">
                <p>Order ID: {order.id}</p>
                <p>Date: {order.date}</p>
                <p>Total: ${order.total}</p>
                <ul className="text-sm text-gray-400 mt-2">
                  {order.items.map((item, idx) => (
                    <li key={idx}>
                      {item.title} x {item.quantity}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
