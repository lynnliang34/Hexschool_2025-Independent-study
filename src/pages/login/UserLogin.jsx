import { Link } from "react-router";
import { useDispatch } from "react-redux";
import { loginUser } from "../../redux/userSlice";

export default function UserLogin() {
  const dispatch = useDispatch();
  const handleLogin = () => {
    dispatch(loginUser({ name: "UserName" }));
  };

  return (
    <div className="container mt-5">
      <h1>使用者登入頁</h1>
      <Link className="btn btn-primary" to="/profile" onClick={handleLogin}>
        登入
      </Link>
    </div>
  );
}
