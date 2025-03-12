import "../assets/scss/all.scss";
import "aos/dist/aos.css";
import { createHashRouter } from "react-router";

import RequireUserAuth from "./RequireUserAuth";
import RequireAdminAuth from "./RequireAdminAuth";

import App from "../App";
import {
  Home,
  About,
  ExploreCourses,
  CourseDetail,
  ScheduleCourses,
  Checkout,
  UserRegister,
  UserLogin,
  UserProfile,
  AdminLogin,
  AdminLayout,
  AdminDashboard,
  AdminCourses,
  AdminOrders,
  AdminKnowledge,
  AdminPhotos,
  AdminMembers,
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
        path: "explore-courses",
        element: <ExploreCourses />,
      },
      {
        path: "course-detail/:id",
        element: <CourseDetail />,
      },
      {
        path: "checkout",
        element: (
          <RequireUserAuth>
            <Checkout />,
          </RequireUserAuth>
        ),
      },
      {
        // 需登入才能進入
        path: "schedule-courses",
        element: (
          <RequireUserAuth>
            <ScheduleCourses />
          </RequireUserAuth>
        ),
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
    // 前台使用者註冊頁
    path: "/register",
    element: <UserRegister />,
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
      {
        path: "/admin/courses",
        element: <AdminCourses />,
      },
      {
        path: "/admin/orders",
        element: <AdminOrders />,
      },
      {
        path: "/admin/knowledge",
        element: <AdminKnowledge />,
      },
      {
        path: "/admin/photos",
        element: <AdminPhotos />,
      },
      {
        path: "/admin/members",
        element: <AdminMembers />,
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
