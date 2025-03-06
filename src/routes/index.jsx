import "../assets/scss/all.scss";

import { createHashRouter } from "react-router";

import RequireUserAuth from "./RequireUserAuth";
import RequireAdminAuth from "./RequireAdminAuth";
import App from "../App";
import {
  Home,
  About,
  UserLogin,
  UserProfile,
  AdminLogin,
  AdminLayout,
  AdminDashboard,
  NotFound,
} from "../pages";

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        // path: "/",
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        // 需登入才能進入
        path: "profile",
        element: (
          <RequireUserAuth>
            <UserProfile />
          </RequireUserAuth>
        ),
      },
    ],
  },
  {
    // 前台使用者登入頁
    path: "/login",
    element: <UserLogin />,
  },
  {
    // 後台管理員登入頁
    path: "/admin-login",
    element: <AdminLogin />,
  },
  {
    // 需登入才能進入
    path: "/admin",
    element: (
      <RequireAdminAuth>
        <AdminLayout />
      </RequireAdminAuth>
    ),
    children: [
      {
        index: true,
        element: <AdminDashboard />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

const router = createHashRouter(routes);

export default router;
