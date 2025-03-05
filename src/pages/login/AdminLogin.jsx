import { Link } from "react-router";

export default function AdminLogin() {
  return (
    <div className="container mt-5">
      <h1>後台登入頁</h1>
      <Link className="btn btn-primary" to="/admin">
        登入
      </Link>
    </div>
  );
}
