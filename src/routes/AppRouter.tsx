import { createBrowserRouter } from "react-router-dom";
import Layout from "./../layouts/Layout";
import LoginPage from "../pages/LoginPage";
import SignUpPage from "../pages/SignUpPage";
import HomePage from "../pages/HomePage";
import FeedPage from "../pages/FeedPage";
import ProtectedRoute from "../components/protected/ProtectedRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/feed",
        element: (
          <ProtectedRoute>
            <FeedPage />
          </ProtectedRoute>
        ),
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
