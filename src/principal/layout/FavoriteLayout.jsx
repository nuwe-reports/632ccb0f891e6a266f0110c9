import { Grid} from '@mui/material';
import { Navbar} from '../components';



export const FavoriteLayout = ({ children }) => {
  return (
     <Grid
    container
    spacing={ 0 }
    direction= 'row'
    alignItems='center'
    justifyContent='space-around'
    sx={{minHeight:'100vh'}}
    >
        <Navbar />
       
        <Grid component='main' sx={{flexGrow:1, p:3, backgroundColor:'orangered', minHeight:'100vh',minWidth:'100%', display:'flex', alignItems:'end', justifyContent:'space-between' }} >
            {children}
        </Grid>
    </Grid>
  )
}
