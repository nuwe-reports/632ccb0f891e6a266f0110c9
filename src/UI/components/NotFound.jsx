import { Grid } from '@mui/material'
import React from 'react'

export const NotFound = () => {
  return (
    <Grid
      container
        direction="row"
        justifyContent="center"
        alignItems="center"
        width="100%"
        height="100vh"
        className="animate__animated animate__fadeIn"
        >
        <img src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9OnCF6ZbgpGuHFet3gFseqjAihPGZ6y0Csg&usqp=CAU`} alt="Error" />
        <h1>404 | Not Found</h1>
    </Grid>
  )
}
