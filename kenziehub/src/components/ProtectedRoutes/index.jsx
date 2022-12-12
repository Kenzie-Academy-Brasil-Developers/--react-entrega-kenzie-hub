import { useContext } from "react";
import { AuthContext } from "../../contexts/UserContext/AuthContext";
import { Navigate, Outlet } from "react-router-dom";

export function ProtectedRoutes() {
  const { userAuth, loading } = useContext(AuthContext);
  if (loading) {
    return null;
  }
  return userAuth ? <Outlet /> : <Navigate to={"/"} />;
}
