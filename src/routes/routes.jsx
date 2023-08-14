import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Main from "../components/Layout/RootLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import About from "../pages/About";
import Media from "../pages/Media";
import PostDetails from "../pages/PostDetails";
import NotFound from "../pages/NotFound";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },

      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/media",
        element: <Media />,
      },
      {
        path: "/post/:id",
        element: <PostDetails />,
      },

      {
        path: "*",
        element: <NotFound />,
      },

    ],
  },
]);

export default routes;
