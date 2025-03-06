import { Link } from "react-router";
import { useDispatch } from "react-redux";
import { loginAdmin } from "../../redux/adminSlice";

export default function AdminLogin() {
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(loginAdmin({ name: "AdminName" }));
  };

  return (
    <div className="container mt-5">
      <h1>後台登入頁</h1>
      <Link className="btn btn-primary" to="/admin" onClick={handleLogin}>
        登入
      </Link>
    </div>
  );
}
