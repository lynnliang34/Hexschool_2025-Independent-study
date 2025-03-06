import { Navigate } from "react-router";
import { useSelector } from "react-redux";

export default function RequireAdminAuth({ children }) {
  const isAdminAuthenticated = useSelector(
    (state) => state.admin.isAuthenticated
  );

  return isAdminAuthenticated ? (
    children
  ) : (
    <Navigate to="/admin-login" replace />
  );
}
