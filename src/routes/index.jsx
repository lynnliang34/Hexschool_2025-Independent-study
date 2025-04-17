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
  SearchCourses,
  KnowledgeSharing,
  Photos,
  Checkout,
  UserRegister,
  UserLogin,
  UserForgotPassword,
  UserProfile,
  AdminLogin,
  AdminLayout,
  AdminDashboard,
  AdminCourses,
  AdminCoupons,
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
        path: "search-courses",
        element: <SearchCourses />,
      },
      {
        path: "knowledge-sharing",
        element: <KnowledgeSharing />,
      },
      {
        path: "photos",
        element: <Photos />,
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
    // 前台使用者忘記密碼頁
    path: "/forgot",
    element: <UserForgotPassword />,
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
        path: "/admin/coupons",
        element: <AdminCoupons />,
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
