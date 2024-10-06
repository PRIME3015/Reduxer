import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom"; // Ensure you're importing from 'react-router-dom'

const PrivateRouter = () => {
  const user = useSelector((state) => state.auth.user); // Access user directly

  return user ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRouter;
