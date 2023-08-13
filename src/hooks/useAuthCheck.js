import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/features/auth/authSlice";

export default function useAuthCheck() {
  const dispatch = useDispatch();
  const [authChecked, setAuthChecked] = useState(false);

  useEffect(() => {
    const localAuth = localStorage?.getItem("user");

    if (localAuth) {
      const auth = JSON.parse(localAuth);
      if (auth?.user) {
        dispatch(
          setUser({
            user: auth.user,
          })
        );
      }
    }
    setAuthChecked(true);
  }, [dispatch, setAuthChecked]);

  return authChecked;
}
