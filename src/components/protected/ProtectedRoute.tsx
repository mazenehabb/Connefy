import React, { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  const auth = useContext(AuthContext);
  if (!auth) {
    throw new Error(
      "AuthContext is undefined. Make sure you are using AuthProvider.",
    );
  }
  const { token } = auth;
  if (!token) {
    return <Navigate to="/login" replace />;
  }
  return <>{children}</>;
}
