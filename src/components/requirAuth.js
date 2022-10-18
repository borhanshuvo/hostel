import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { UserContext } from "../App";

const RequireAuth = ({ children }) => {
  const { loggedInUser } = useContext(UserContext);

  let location = useLocation();

  if (!loggedInUser?.email) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }
  return children;
};

export default RequireAuth;
