import { Routes, Route, Navigate } from "react-router-dom";
import { useCheckAuth } from "../hooks/useCheckAuth";

import { CheckingAuth } from "../UI/components/CheckingAuth";

import { AuthRoutes } from "../auth/routes/AuthRoutes";
import { PrincipalRoutes } from "./PrincipalRoutes";
import { NotFound } from "../principal/pages/NotFound";

export const AppRouter = () => {
  const { status } = useCheckAuth();
  if (status === "checking") {
    return <CheckingAuth />;
  }
  return (
    <Routes>
      //{" "}
      {status === "authenticated" ? (
        <Route path="/*" element={<PrincipalRoutes />} />
      ) : (
        <Route path="/auth/*" element={<AuthRoutes />} />
      )}
      <Route path="/*" element={<Navigate to="/auth/login" />} />
      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
  );
};
// {status === "authenticated" ? (
//   <Route path="/*" element={<PrincipalRoutes />} />
// ) : (
//   <Route path="/auth/*" element={<AuthRoutes />} />
// )}
