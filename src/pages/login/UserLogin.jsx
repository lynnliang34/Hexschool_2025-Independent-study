import { Link } from "react-router";

export default function UserLogin() {
  return (
    <div className="container mt-5">
      <h1>使用者登入頁</h1>
      <Link className="btn btn-primary" to="/profile">
        登入
      </Link>
    </div>
  );
}
