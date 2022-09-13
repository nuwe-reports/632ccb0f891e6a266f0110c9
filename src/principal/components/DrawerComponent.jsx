import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  Drawer,
  IconButton,
  List,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { LogoutOutlined } from "@mui/icons-material";
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
              style={{
                display: "flex",
                alignItems: "end",
                justifyContent: "end",
                width: "90%",
              }}
            >
              <Typography
                variant="p"
                noWrap
                component="div"
                alignSelf="center"
              >
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
