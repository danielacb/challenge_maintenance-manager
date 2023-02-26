import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import { AssetsPage, ErrorPage, UnitsPage, UsersPage } from "./pages";

import "antd/dist/reset.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <AssetsPage />,
      },
      {
        path: "units",
        element: <UnitsPage />,
      },
      {
        path: "users",
        element: <UsersPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
