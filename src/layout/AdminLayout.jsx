import axios from "axios";
import { Outlet } from "react-router";
import { Link, NavLink } from "react-router";
import { useDispatch } from "react-redux";
import { logoutAdmin } from "../redux/adminSlice";
import { Logo } from "../components";

const adminrMenuItems = [
  { title: "首頁", link: "/admin" },
  { title: "課程", link: "/admin/courses" },
  { title: "訂單", link: "/admin/orders" },
  { title: "知識分享", link: "/admin/knowledge" },
  { title: "活動照片", link: "/admin/photos" },
  { title: "會員資料", link: "/admin/members" },
];

function AdminLayout() {
  const dispatch = useDispatch();

  const handleLogout = () => {
    axios
      .post(`${BASE_URL}/logout`)
      .then(() => {
        dispatch(logoutAdmin());
      })
      .catch(() => {
        alert("登出失敗");
      });
  };

  return (
    <>
      <nav className="navbar bg-body-tertiary">
        <div className="container">
          <Link className="navbar-brand admin-home fs-3" to="/admin">
            <Logo className={"admin-logo mb-1"} />
            愉運後台
          </Link>

          <button
            class="btn btn-secondary-2 me-auto"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasWithBothOptions"
            aria-controls="offcanvasWithBothOptions"
          >
            Menu
          </button>

          <div
            class="offcanvas offcanvas-start"
            data-bs-scroll="true"
            tabindex="-1"
            id="offcanvasWithBothOptions"
            aria-labelledby="offcanvasWithBothOptionsLabel"
          >
            <div class="offcanvas-header">
              <h5 class="offcanvas-title" id="offcanvasWithBothOptionsLabel">
                愉運後台管理系統
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body d-flex flex-column mx-4">
              {adminrMenuItems.map((item, index) => (
                <NavLink
                  key={index}
                  to={item.link}
                  className={"adminr-menu-item"}
                >
                  {item.title}
                </NavLink>
              ))}
            </div>
          </div>

          <Link
            className="btn btn-outline-secondary-2"
            to="/admin-login"
            onClick={handleLogout}
          >
            登出
          </Link>
        </div>
      </nav>
      <div className="py-5">
        <Outlet />
      </div>
    </>
  );
}

export default AdminLayout;
