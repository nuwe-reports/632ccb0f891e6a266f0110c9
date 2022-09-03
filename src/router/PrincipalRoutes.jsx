
import {Routes, Route, Navigate } from 'react-router-dom';
import { Favorites, InfoCharacter, PrincipalPage } from '../principal/pages';


export const PrincipalRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<PrincipalPage />}/>
        <Route path='/favorites' element={<Favorites />}/>
        <Route path='character/:id' element={<InfoCharacter />}/>
        <Route path='/*' element={<Navigate to='/' />} />
    </Routes>
  )
}
