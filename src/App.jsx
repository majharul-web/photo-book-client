import { RouterProvider } from "react-router-dom";
import routes from "./routes/routes";
import useAuthCheck from "./hooks/useAuthCheck";
import Loading from "./components/Shared/Loading";

const App = () => {
  const authChecked = useAuthCheck();

  return !authChecked ? (
    <div className="h-screen flex justify-center items-center bg-gray-50">
      <Loading />
    </div>
  ) : (
    <div>
      <RouterProvider router={routes} />
    </div>
  );
};

export default App;