
import {Routes, Route, Navigate } from 'react-router-dom';
import { PrincipalPage } from '../principal/pages';


export const PrincipalRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<PrincipalPage />}/>
        <Route path='/' element={<Navigate to='/' />}/>
    </Routes>
  )
}
