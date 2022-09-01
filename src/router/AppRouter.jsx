import {Routes, Route} from 'react-router-dom';
import { AuthRoutes } from './AuthRoutes';
import { PrincipalRoutes } from './PrincipalRoutes';

export const AppRouter = () => {
  return (
    <Routes>
    {/* Login y registro */}
        <Route path='/auth/*' element={<AuthRoutes />} />

    {/* App */}
    <Route path='/*' element={<PrincipalRoutes />} />
    </Routes>
  )
}
