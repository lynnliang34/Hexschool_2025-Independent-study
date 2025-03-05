import "../assets/scss/all.scss";

import { createHashRouter } from "react-router";

import App from "../App";
import { Home, About, NotFound } from "../pages";

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
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

const router = createHashRouter(routes);

export default router;
