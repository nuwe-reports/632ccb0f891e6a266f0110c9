import { Routes, Route, Navigate } from "react-router-dom";
import { useCheckAuth } from "../hooks/useCheckAuth";
import { CheckingAuth } from "../UI/components/CheckingAuth";

import { AuthRoutes } from "../auth/routes/AuthRoutes";
import { PrincipalRoutes } from "./PrincipalRoutes";
import { PrivateRoute } from './PrivateRoute';

export const AppRouter = () => {

  const { status } = useCheckAuth();
  if (status === "checking") {
    return <CheckingAuth />;
  }
  return (
    <Routes>
      {status === "authenticated" ? (
        <Route path="/*" element={
          <PrivateRoute>
            <PrincipalRoutes />
          </PrivateRoute>
        } />
      ) : (
        <Route path="/auth/*" element={<AuthRoutes />} />
      )}
      {/* Login y registro */}

      {/* App */}
      <Route path="/*" element={<Navigate to='/auth/login'/>} />
    </Routes>
  );
};
