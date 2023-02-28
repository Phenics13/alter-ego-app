import { FC, ReactElement } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectCurrentUser } from "../store/user/user.selector";

const RequireAuth: FC<{ children: ReactElement }> = ({ children }) => {
  const user = useSelector(selectCurrentUser);

  if (!user) {
    return <Navigate to="/sign-in" />;
  }

  return children;
};

export default RequireAuth;
