import { Routes, Route, Navigate } from "react-router-dom";
import { PrincipalPage } from "../principal/pages";
import { Favorites } from "../principal/components";
import { FavoritePage } from "../principal/components";
import { NotFound } from "../principal/pages/NotFound";
import { LoginPage, RegisterPage } from "../auth/pages";
import { useSelector } from "react-redux";


export const PrincipalRoutes = () => {
  
  
  return (
    <Routes>

<Route path='/auth/login' element={<Navigate to='/'/>} />
      <Route path='/auth/register' element={<Navigate to='/'/>} />
      
      <Route path='/' element={<PrincipalPage />} />
      <Route path="favorites" element={<Favorites />} />
      <Route path="character/:id" element={<FavoritePage />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
};
