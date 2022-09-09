
import {Routes, Route, Navigate } from 'react-router-dom';
import { PrincipalPage } from '../principal/pages';
import { Favorites } from '../principal/components'
import { FavoritePage } from '../principal/components';




export const PrincipalRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<PrincipalPage />}/>
        <Route path='favorites' element={<Favorites />}/>
        <Route path='character/:id' element={<FavoritePage />}/>
        TODO: Enviar a la 404
        <Route path='/*' element={<Navigate to='/' />} />
        {/* <Route path='*' element={<NotFound />} /> */}
    </Routes>
  )
}
