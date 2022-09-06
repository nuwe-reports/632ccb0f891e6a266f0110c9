
import {Routes, Route, Navigate } from 'react-router-dom';
import { Favorites, InfoCharacter, PrincipalPage } from '../principal/pages';


export const PrincipalRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<PrincipalPage />}/>
        <Route path='favorites' element={<Favorites />}/>
        <Route path='character/:id' element={<InfoCharacter />}/>
        TODO: Enviar a la 404
        <Route path='/*' element={<Navigate to='/' />} />
    </Routes>
  )
}
