import {  useSelector } from "react-redux";
import {  Grid, List } from "@mui/material";
import { FavoriteLayout } from "../layout/FavoriteLayout";
import { FavoriteCard } from "../components/FavoriteCard";

export const Favorites = () => {
 


  const { favorites } = useSelector((state) => state.characters);
  
  return (
    <FavoriteLayout>
      <Grid
        container
        direction="row"
        justifyContent="space-around"
        alignItems="center"
        minWidth="90%"
        marginTop='5%'
      >
       
        <List
          sx={{
            minWidth: "100",
            minHeight: '100',
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            flexWrap: "wrap",
          }}
       
          
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

