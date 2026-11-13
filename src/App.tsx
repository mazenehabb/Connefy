import { RouterProvider } from "react-router-dom";
import "./App.css";
import "./index.css";
import router from "./routes/AppRouter";
import { ToastContainer } from "react-toastify";
function App() {
  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer position="top-right" autoClose={3000} theme="colored" />
    </>
  );
}

export default App;
