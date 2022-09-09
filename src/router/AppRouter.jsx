import { Routes, Route, Navigate } from "react-router-dom";
import { useCheckAuth } from "../hooks/useCheckAuth";

import { CheckingAuth } from "../UI/components/CheckingAuth";

import { AuthRoutes } from "../auth/routes/AuthRoutes";
import { PrincipalRoutes } from "./PrincipalRoutes";

export const AppRouter = () => {
  const { status } = useCheckAuth();
  if (status === "checking") {
    return <CheckingAuth />;
  }
  return (
    <Routes>
      //{" "}
      { status === 'not-authenticated' ? (
        <Route path="/auth/*" element={<AuthRoutes />} />
        
      ) : (
        <Route path="/*" element={<PrincipalRoutes />} />
      )}
      <Route path="/*" element={<Navigate to="/auth/login" />} />
      
    </Routes>
  );
};
