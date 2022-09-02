import {Routes, Route} from 'react-router-dom';
import { Favorites } from '../principal/pages/Favorites';
import { AuthRoutes } from './AuthRoutes';
import { PrincipalRoutes } from './PrincipalRoutes';

export const AppRouter = () => {
  return (
    <Routes>
    {/* Login y registro */}
        <Route path='/auth/*' element={<AuthRoutes />} />

    {/* App */}
    <Route path='/*' element={<PrincipalRoutes />} />
    <Route path='/favorites' element={<Favorites />} />

    </Routes>
  )
}
