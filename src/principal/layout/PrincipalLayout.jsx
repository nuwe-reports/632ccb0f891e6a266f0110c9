import {Box, Button} from '@mui/material';
import { Navbar, SideBar } from '../components';


const drawerWidth = 240;
export const PrincipalLayout = ({ children }) => {
  return (
    <>
        <Navbar drawerWidth={drawerWidth}/>
       
        <Box component='main' sx={{flexGrow:1, p:3}}>
            {children}
            <Button variant="outlined" style={{ display:'flex', alignItems:'center', justifyContent:'center'}} onClick={() => dispatch(getCharacters(page))}>Siguiente</Button> 
        </Box>
    </>
  )
}
