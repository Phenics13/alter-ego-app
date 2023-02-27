import { FC, ReactElement } from "react";
import { Navigate } from "react-router-dom";

const RequireAuth: FC<{ children: ReactElement }> = ({ children }) => {
  const user = null;

  if (!user) {
    return <Navigate to="/sign-in" />;
  }

  return children;
};

export default RequireAuth;
