
import {  useSelector } from "react-redux";

import {  Grid, List } from "@mui/material";
import { FavoriteLayout } from "../layout/FavoriteLayout";
import { FavoriteCard } from "./FavoriteCard";

export const Favorites = () => {
 


  const { favorites } = useSelector((state) => state.characters);
  
  return (
    <FavoriteLayout>
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        width="100vw"
        
        sx={{backgroundColor:'orangered', marginTop:10}}
        
      >
       
        <List
          sx={{
            minWidth: "100%",
            minHeight: '100vh',
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            flexWrap: "wrap",
          }}
          cols={3}
          gap={4}
        >
          {favorites &&
            favorites.map((favorite) => (
              <FavoriteCard key={favorite.id} {...favorite} />
            ))}
        </List>
      </Grid>
    </FavoriteLayout>
  );
};

