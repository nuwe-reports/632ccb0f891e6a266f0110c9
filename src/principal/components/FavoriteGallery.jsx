import {  useSelector } from "react-redux";
import { Grid, List } from '@mui/material'
import { FavoriteCard } from './FavoriteCard'

export const FavoriteGallery = () => {
    const { favorites } = useSelector((state) => state.characters);
  return (
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
            width: "100%",
            height: "100",
            display: "flex",
            justifyContent: {xs:'center',sm:'center', md:'space-around',lg:'space-around'},
            alignItems: {xs:'center',sm:'center', md:'space-around',lg:'space-around'},
            flexWrap: "wrap",
            minHeight: "100vh",
            paddingTop:{xs:'10%', sm: '10%', md:'0px'},
            paddingLeft:{xs:'10%',sm: '10%', md:'0px'},
            paddingRight:{xs:'10%',sm: '10%', md:'0px'},
            margin:{xs:'40px', md:'10px'}

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
