import { Routes, Route, Navigate } from "react-router-dom";
import { FavoritePage, Favorites } from "../components";
import { NotFound } from "../pages/NotFound";
import { PrincipalPage } from "../pages/PrincipalPage";

export const PrincipalRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<PrincipalPage />} />
      <Route path="/auth/login" element={<Navigate to="/" />} />
      <Route path="/auth/register" element={<Navigate to="/" />} />
      <Route path="favorites" element={<Favorites />} />
      <Route path="character/:id" element={<FavoritePage />} />
      <Route path="*" element={<NotFound />} />
     
    </Routes>
  );
};
