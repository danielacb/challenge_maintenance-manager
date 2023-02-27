import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import { AssetsPage, ErrorPage, UnitsPage, UsersPage } from "./pages";
import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-react";

import "antd/dist/reset.css";
import Login from "./pages/Login";

const frontendApi = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

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
    <ClerkProvider publishableKey={frontendApi}>
      <SignedIn>
        <RouterProvider router={router} />
      </SignedIn>
      <SignedOut>
        <Login />
      </SignedOut>
    </ClerkProvider>
  </React.StrictMode>
);
