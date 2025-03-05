import { Outlet } from "react-router";
import { Link } from "react-router";

function AdminLayout() {
  return (
    <>
      <nav class="navbar bg-body-tertiary">
        <div class="container-fluid">
          <Link class="navbar-brand" href="/admin">
            <img
              src="/move-with-joy.svg"
              alt="Logo"
              width="30"
              height="24"
              class="d-inline-block align-text-top"
            />
            愉運後台
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
