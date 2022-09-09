import {  Grid, Link } from '@mui/material'
import { Link as RouterLink } from "react-router-dom";

export const NotFound = () => {
  return (
    <Grid
     container
      direction="column"
      justifyContent="center"
      alignItems="center"
      width='100%'
      minHeight='100vh'
      className='animate__animated animate__fadeIn'
      sx={{backgroundColor:'orange'}}>
        
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1pCF8jXd5_vpbIG4Vyr2FqifAeLfUWlM5KA&usqp=CAU" alt="not Found" />
        <h1>404 | Not Found</h1>
         <Link sx={{
              fontSize:'25px',
              textDecoration:'none'
            }} component={RouterLink} size="small" color="primary" to={"/"}>
              Home
            </Link>
        
    </Grid>
  )
}
