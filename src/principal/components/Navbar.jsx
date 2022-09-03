import { MenuOutlined, LogoutOutlined } from '@mui/icons-material';
import {AppBar, Toolbar, IconButton, Grid, Typography, Link } from '@mui/material'
import {Link as RouterLink} from 'react-router-dom'

import './styles.css'
export const Navbar = ({drawerWidth = 240}) => {
  return (
    <AppBar 
    position='fixed'
    sx={{
        width:{sm:`calc(100%`},
        ml: {sm:`${drawerWidth}px`}
    }}
    >
        <Toolbar>
            <IconButton color='inherit' edge='start' sx={{mr:2, display:{sm:'none'}}}>
                <MenuOutlined />
            </IconButton>

            <Grid container direction='row' justifyContent='space-around' alignItems='center'>
                    <div style={{display:'flex', alignItems:'center', width:'100px'}}>

                    <img src="https://i.pinimg.com/550x/93/93/82/939382a22dc96f1d224614978b3c3e70.jpg" alt="logo" className='logo-img' />
                    <Link component={RouterLink} size="small" color="secondary" to='/favorites' className='favorite-link' > Favoritos </Link>
                    </div>
                 
                   
                <Typography variant="h6" noWrap component='div'>
                    Facundo Herrera
                </Typography>
            
                <IconButton color='error'>
                    <LogoutOutlined />
                </IconButton>
            </Grid>
        </Toolbar>
    </AppBar>
  )
}
