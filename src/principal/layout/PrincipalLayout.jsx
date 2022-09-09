import {Box, Grid} from '@mui/material';
import { Navbar} from '../components';



export const PrincipalLayout = ({ children }) => {
  return (
    <Grid
    container
    spacing={ 0 }
    direction= 'column'
    alignItems='center'
    justifyContent='center'
    sx={{minHeight:'100vh'}}
    >
        <Navbar />
       
        <Box component='main' sx={{flexGrow:1, p:4, backgroundColor:'orange'}}>
            {children}
            
        </Box>
    </Grid>
  )
}
