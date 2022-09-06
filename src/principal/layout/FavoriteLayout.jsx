import {Box, Button} from '@mui/material';
import { Navbar} from '../components';


const drawerWidth = 240;
export const FavoriteLayout = ({ children }) => {
  return (
    <>
        <Navbar drawerWidth={drawerWidth}/>
       
        <Box component='main' sx={{flexGrow:1, p:3}}>
            {children}
        </Box>
    </>
  )
}
