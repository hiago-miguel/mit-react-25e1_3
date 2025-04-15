// src/components/PrivateRoute.jsx
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

export default function PrivateRoute({ redirectTo = "/login" }) {
  const user = useSelector((state) => state.auth.user);
  return user ? <Outlet /> : <Navigate to={redirectTo} />;
}
