import { RouterProvider } from "react-router-dom";
import routes from "./routes/routes";
import useAuthCheck from "./hooks/useAuthCheck";

const App = () => {
  const authChecked = useAuthCheck();

  return !authChecked ? (
    <div>Checking authentication....</div>
  ) : (
    <div>
      <RouterProvider router={routes} />
    </div>
  );
};

export default App;