import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  AppBar,
  Toolbar,
  Tabs,
  Tab,
  useMediaQuery,
  useTheme,
  Typography,
  IconButton,
} from "@mui/material";
import "./styles.css";
import { startLogout } from "../../store/auth/thunks";
import { DrawerComponent } from "./DrawerComponent";
import { LogoutOutlined } from "@mui/icons-material";


export const Navbar = () => {
  const dispatch = useDispatch();
  const { displayName } = useSelector((state) => state.auth);
  const [value, setValue] = useState(0);
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  
  
  const onLogout = () => {
    dispatch(startLogout());
  };
  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: "primary",
      }}
      
    >
      <Toolbar
      
      >
        {isMatch ? (
          <>
            <Typography>Rick And Morty</Typography>
            <DrawerComponent />
          </>
        ) : (
          <>

          <Tabs
            textColor="inherit"
            value={value}
            onChange={(e, value) => setValue(value)}
            
          >
            <Tab
              label="Principal"
              LinkComponent={RouterLink}
              size="small"
              color="secondary"
              to="/"
              className="favorite-link"
            />
            <Tab
              label="Favoritos"
              LinkComponent={RouterLink}
              size="small"
              color="secondary"
              to="/favorites"
              className="favorite-link"
            />
          </Tabs>

          <div
            style={{ display: "flex", alignItems: "center", justifyContent:'end' ,width: "90%",}}
            
          >
            <Typography variant="h6" noWrap component="div" alignSelf='center'>
              {displayName}
            </Typography>
            <IconButton color="warning" onClick={onLogout}>
              <LogoutOutlined />
            </IconButton>
          </div>
          </>
        )}
        {/* <div
            style={{
              display: "flex",
              alignItems: "center",
              width: "200px",
              justifyContent: "space-around",
            }}
          >
            <Link
              component={RouterLink}
              size="small"
              color="secondary"
              to="/"
              className="favorite-link"
            >
              {" "}
              Principal{" "}
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
            style={{ display: "flex", alignItems: "center", width: "200px",}}
            
          >
            <Typography variant="h6" noWrap component="div">
              {displayName}
            </Typography>
            <IconButton color="warning" onClick={onLogout}>
              <LogoutOutlined />
            </IconButton>
          </div>
        */}
      </Toolbar>
    </AppBar>
  );
};
