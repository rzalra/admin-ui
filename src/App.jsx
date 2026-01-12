import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import SignInPage from "./Pages/SignIn";
import SignUpPage from "./Pages/SignUp";
import DashboardPage from "./Pages/dashboard";
import BalancePage from "./Pages/BalancePage";
import ErrorPage from "./Pages/404";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <DashboardPage />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/balance",
      element: <BalancePage />,
    },
    {
      path: "/login",
      element: <SignInPage />,
    },
    {
      path: "/register",
      element: <SignUpPage />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;