import { Navigate } from "react-router";
import { useSelector } from "react-redux";

export default function RequireUserAuth({ children }) {
  const isUserAuthenticated = useSelector(
    (state) => state.user.isAuthenticated
  );

  return isUserAuthenticated ? children : <Navigate to="/login" replace />;
}
