import {  useSelector } from "react-redux";
import { Grid, List } from '@mui/material'
import { FavoriteCard } from './FavoriteCard'

export const FavoriteGallery = () => {
    const { favorites } = useSelector((state) => state.characters);
  return (
    <Grid
        container
        direction="column"
        justifyContent="space-around"
        alignItems="center"
        minWidth="90%"
        marginTop='5%'
      >
       
        <List
          sx={{
            minWidth: "80%",
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
  )
}
