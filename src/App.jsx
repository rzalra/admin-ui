import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import SignInPage from "./Pages/SignIn";
import SignUpPage from "./Pages/SignUp";
import DashboardPage from "./Pages/dashboard"; 
import BalancePage from "./Pages/BalancePage"; 
import ErrorPage from "./Pages/404";           

// 1. IMPORT HALAMAN EXPENSE
import ExpensePage from "./Pages/ExpensePage";

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
    // 2. ROUTE UNTUK EXPENSES
    {
      path: "/expenses",
      element: <ExpensePage />,
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