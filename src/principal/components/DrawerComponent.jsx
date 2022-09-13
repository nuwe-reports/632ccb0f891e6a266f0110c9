import { useState } from "react";
import { Link, Link as RouterLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  Drawer,
  IconButton,
  List,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { LogoutOutlined, Padding } from "@mui/icons-material";
import { startLogout } from "../../store/auth/thunks";





export const DrawerComponent = () => {
const dispatch = useDispatch();
  const [value, setValue] = useState(0);
  const [openDrawer, setOpenDrawer] = useState(false);
  const { displayName } = useSelector((state) => state.auth);

  const onLogout = () => {
    dispatch(startLogout());
  };
  return (
    <>
      <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
        <List style={{backgroundColor:'stealgray', height:'100%', display:'flex', flexDirection:'column', justifyContent:'start', alignItems:'center'}}>
          <>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              width: "200px",
              justifyContent: "start",
              flexDirection:'column',
              padding:'10px',
              height: '90%',
              marginBottom:'10px'
            }}
           
            
          >
            <Link
              component={RouterLink}
              size="small"
              color="black"
              to="/"
              className="favorite-link"
              style={{textDecoration:'none', color  :'black', borderBottom:'1px solid black', marginBottom:'20px'}}
              underline='always'
            >
              {" "}
              Principal{" "}
            </Link>
            <Link
            variant='body2'
              component={RouterLink}
              size="small"
              color="primary"
              to="/favorites"
              className="favorite-link"
              style={{textDecoration:'none', color  :'red',borderBottom:'1px solid red', marginBottom:'20px'}}
              underline='always'
            >
              {" "}
              Favoritos{" "}
            </Link>
          </div>
          <div
            style={{ display: "flex", alignItems: "center",justifyContent:'end', marginLeft:'auto',}}
            
          >
            <Typography variant="h6" noWrap component="div">
              {displayName}
            </Typography>
            <IconButton color="warning" onClick={onLogout}>
              <LogoutOutlined />
            </IconButton>
            </div>
          </>
        </List>
      </Drawer>
      <IconButton
        sx={{ color: "white", marginLeft: "auto" }}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <MenuIcon />
      </IconButton>
    </>
  );
};
