import { Link as RouterLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { MenuOutlined, LogoutOutlined } from "@mui/icons-material";
import {
  AppBar,
  Toolbar,
  IconButton,
  Grid,
  Typography,
  Link,
} from "@mui/material";

import "./styles.css";
import { startLogout } from "../../store/auth/thunks";
export const Navbar = ({ drawerWidth = 240 }) => {
  const dispatch = useDispatch();
  const { displayName } = useSelector((state) => state.auth);
  const onLogout = () => {
    dispatch(startLogout());
  };
  return (
    <AppBar
      position="fixed"
      sx={{
        width: { sm: "100%" },
        ml: { sm: `${drawerWidth}px` },
      }}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          edge="start"
          sx={{ mr: 2, display: { sm: "none" } }}
        >
          <MenuOutlined />
        </IconButton>

        <Grid
          container
          direction="row"
          justifyContent="space-around"
          alignItems="center"
        >
          <div
            style={{ display: "flex", alignItems: "center", width: "200px", justifyContent:'space-around' }}
          >
            
            
            <Link
              component={RouterLink}
              size="small"
              color="secondary"
              to="/principal"
              className="favorite-link"
            >
              {" "}
              Home{" "}
            </Link>
            <Link
              component={RouterLink}
              size="small"
              color="secondary"
              to="/favorites"
              className="favorite-link"
            >
              {" "}
              Favoritos{" "}
            </Link>
          </div>



          <div
            style={{ display: "flex", alignItems: "center", width: "200px" }}
          >
            
          <Typography variant="h6" noWrap component="div">
            {displayName}
          </Typography>
          <IconButton color="error" onClick={onLogout}>
            <LogoutOutlined />
          </IconButton>
          </div>

        </Grid>
      </Toolbar>
    </AppBar>
  );
};
