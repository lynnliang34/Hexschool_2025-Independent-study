import { NavLink } from "react-router";
import { useNavigate } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../redux/userSlice";

export default function Header() {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);

  const handleLogout = () => {
    setTimeout(() => {
      // 在這裡執行登出邏輯，例如清除 token
      dispatch(logoutUser());
    }, 100); // 延遲執行 logout，確保導航先發生
  };

  const navigate = useNavigate();

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          Navbar
        </NavLink>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">
                About
              </NavLink>
            </li>
          </ul>

          <div className="">
            {isAuthenticated ? (
              <NavLink
                className="btn btn-outline-primary"
                onClick={() => {
                  navigate("/"); // 先導航
                  handleLogout(); // 再登出
                }}
                disabled={!isAuthenticated} // 禁止連點
              >
                登出
              </NavLink>
            ) : (
              <NavLink className="btn btn-primary" to="/login">
                登入
              </NavLink>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
