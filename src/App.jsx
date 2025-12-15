import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignInPage from "./Pages/SignIn";
import SignUpPage from "./Pages/SignUp";
import ErrorPage from "./Pages/404"; 
import DashboardPage from "./Pages/dashboard"; 
import BalancePage from "./Pages/BalancePage"; 

const App = () => {
  const myRouter = createBrowserRouter([
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

  return <RouterProvider router={myRouter} />;
};

export default App;