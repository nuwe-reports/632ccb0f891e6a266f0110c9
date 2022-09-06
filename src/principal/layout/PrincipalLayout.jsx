import {Box, Button} from '@mui/material';
import { Navbar} from '../components';



export const PrincipalLayout = ({ children }) => {
  return (
    <>
        <Navbar />
       
        <Box component='main' sx={{flexGrow:1, p:3}}>
            {children}
            
        </Box>
    </>
  )
}
