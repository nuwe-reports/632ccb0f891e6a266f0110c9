import {Grid, CircularProgress } from '@mui/material'

export const CheckingAuth = () => {
  return (
    <Grid
    container
    spacing={0}
    direction='column'
    alignItems='center'
    justifyContent='center'
    sx={{minHeight:'100vh', backgroundColor:'primary.main', padding: 4}}
    >
        <CircularProgress color='error' size={60} />
    </Grid>
  )
}
