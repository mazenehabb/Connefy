import { RouterProvider } from "react-router-dom";
import "./App.css";
import "./index.css";
import router from "./routes/AppRouter";
import { ToastContainer } from "react-toastify";
import AuthProvider from "./contexts/AuthProvider";
import PostsProvider from "./contexts/PostsProvider";
function App() {
  return (
    <>
      <AuthProvider>
        <PostsProvider>
          <RouterProvider router={router} />
        </PostsProvider>
      </AuthProvider>

      <ToastContainer position="top-right" autoClose={3000} theme="colored" />
    </>
  );
}

export default App;
