import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Main from "../components/Layout/RootLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";

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
      // {
      //   path: "/register",
      //   element: (
      //     <PrivateRoute>
      //       <AccountCreator />
      //     </PrivateRoute>
      //   ),
      // },
    ],
  },
]);

export default routes;
