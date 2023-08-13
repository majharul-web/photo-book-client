import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Main from "../components/Layout/RootLayout";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },

      // {
      //   path: "/login",
      //   element: <Login />,
      // },
      // {
      //   path: "/signup",
      //   element: <Signup />,
      // },
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
