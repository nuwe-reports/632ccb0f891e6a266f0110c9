import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux'
import { Navbar } from "../components";
import { Button, Grid,  List } from "@mui/material";
import { CardItem } from "../components/CardItem";


export const Favorites = () => {
  const navigate = useNavigate();

  const { favoritesCharacters } = useSelector(state => state.characters)
  console.log(favoritesCharacters);
  
  return (
    <>
    
        <Navbar />
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          width="100%"
          style={{ backgroundColor: "beige", height: "100vh" }}
        >
          <List
            sx={{
              width: "100%",
              height: 600,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
            cols={3}
            rowHeight={164}
            gap={4}
          >

            {
              favoritesCharacters.map(favorite => <CardItem key={favorite.id} character={favorite} />)
            }

          </List>
        </Grid>
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
      
    </>
  );
};

const itemData = [
  {
    img: "https://images.unsplash.com/file-1636585210491-f28ca34ea8ecimage",
    title: "ejemplo1",
  },
  {
    img: "https://images.unsplash.com/file-1636585210491-f28ca34ea8ecimage",
    title: "ejemplo2",
  },
  {
    img: "https://images.unsplash.com/file-1636585210491-f28ca34ea8ecimage",
    title: "ejemplo3",
  },
  {
    img: "https://images.unsplash.com/file-1636585210491-f28ca34ea8ecimage",
    title: "ejemplo4",
  },
];
