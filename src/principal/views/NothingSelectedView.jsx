import { Grid, Typography } from '@mui/material';
import { StartOutline } from '@mui/icons-material';

export const NothingSelectedView = () => {
  return (
    <Grid
    container
    spacing={0}
    direction='column'
    alignItems='center'
    justifyContent='center'
    sx={{minHeight:'100vh', backgroundColor:'optional.main'}}
    >
        <Grid item xs={12}>
            <StartOutline sx={{fontSize: 100, color:'white'}} />
        </Grid>
        <Grid item xs={12}>
            <Typography color='white' variant='h5'>Selecciona tu favorito</Typography>
        </Grid>
    </Grid>
  )
}
