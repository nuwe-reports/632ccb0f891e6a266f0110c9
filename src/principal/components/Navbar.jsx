import { MenuOutlined, LogoutOutlined } from '@mui/icons-material';
import {AppBar, Toolbar, IconButton, Grid, Typography, Drawer} from '@mui/material'
import './styles.css'
export const Navbar = ({drawerWidth = 240}) => {
  return (
    <AppBar 
    position='fixed'
    sx={{
        width:{sm:`calc(100% - ${drawerWidth}px)`},
        ml: {sm:`${drawerWidth}px`}
    }}
    >
        <Toolbar>
            <IconButton color='inherit' edge='start' sx={{mr:2, display:{sm:'none'}}}>
                <MenuOutlined />
            </IconButton>

            <Grid container direction='row' justifyContent='space-between' alignItems='center'>
                <img src="https://i.pinimg.com/550x/93/93/82/939382a22dc96f1d224614978b3c3e70.jpg" alt="logo" className='logo-img' />
                <IconButton color='error'>
                    <LogoutOutlined />
                </IconButton>
            </Grid>
        </Toolbar>
    </AppBar>
  )
}
