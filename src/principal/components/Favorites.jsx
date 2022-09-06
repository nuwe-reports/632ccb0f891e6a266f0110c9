import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Navbar } from ".";
import { Button, Grid, List } from "@mui/material";
import { CardItem } from "./CardItem";
import { FavoriteLayout } from "../layout/FavoriteLayout";

export const Favorites = () => {
  const navigate = useNavigate();

  const { favorites } = useSelector((state) => state.characters);

  return (
    <FavoriteLayout>
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        width="100%"
        height="100vh"
      >
        <Grid
          item
          fontSize='25px'
        >
          <Button
            onClick={() => navigate("/")}
            variant="outlined"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            Home
          </Button>
        </Grid>
        <List
          sx={{
            width: "100%",
            height: "100vh",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            flexWrap: "wrap",
          }}
          cols={3}
          rowHeight={164}
          gap={4}
        >
          {favorites &&
            favorites.map((favorite) => (
              <CardItem key={favorite.id} {...favorite} />
            ))}
        </List>
      </Grid>
    </FavoriteLayout>
  );
};

