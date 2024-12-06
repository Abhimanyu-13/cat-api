// import { useSelector } from "react-redux"
// import { Navigate } from "react-router-dom"
// export const PrivateRoute = ({ children }) => {
//     const { userLoggedIn } = useSelector((state) => state.user);
//     return userLoggedIn ? children : <Navigate to="/login"  />;
//   };
  
import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ Component }) => {
  const { userLoggedIn } = useSelector((state) => state.user);

  if (userLoggedIn) {
    return <Component />;
  }

  return <Navigate to="/login" replace />;
};
