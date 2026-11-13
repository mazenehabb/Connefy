import { createBrowserRouter } from "react-router-dom";
import Layout from "./../layouts/Layout";
import Home from "../pages/Home";
import LoginPage from "../pages/LoginPage";
import Feed from "../pages/Feed";
import SignUpPage from "../pages/SignUpPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/feed",
        element: <Feed />,
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/signup",
    element: <SignUpPage />,
  },
]);
export default router;
