import {Box, Grid} from '@mui/material';
import { Navbar} from '../components';



export const FavoriteLayout = ({ children }) => {
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
       
        <Grid component='main' sx={{flexGrow:1, p:4, backgroundColor:'orangered', minHeight:'100vh' }} >
            {children}
        </Grid>
    </Grid>
  )
}
