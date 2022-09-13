import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, Grid, List } from "@mui/material";
import { CardItem } from "./CardItem";
import { getCharacters } from "../../store/principal/thunks";
import { PrincipalLayout } from "../layout/PrincipalLayout";
import { Navbar } from "./Navbar";

export const ImageGallery = () => {
  const { isLoading, characters, page, prevPage } = useSelector(
    (state) => state.characters
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCharacters());
  }, []);

  return (
    <PrincipalLayout>
  
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        width="100%"
        className="animate__animated animate__fadeIn"
        sx={{ backgroundColor: "orange", margin: 5 }}
      >
        <Button
          variant="outlined"
          disabled={isLoading}
          onClick={() => dispatch(getCharacters(prevPage))}
        >
          Anterior{" "}
        </Button>

        <Button
          variant="outlined"
          disabled={isLoading}
          onClick={() => dispatch(getCharacters(page))}
        >
          Siguiente
        </Button>

        <List
          sx={{
            width: "100%",
            height: "100",
            backgroundColor: "orange",
            display: "flex",
            justifyContent: {xs:'center',sm:'center', md:'space-around',lg:'space-around'},
            alignItems: {xs:'center',sm:'center', md:'space-around',lg:'space-around'},
            flexWrap: "wrap",
            minHeight: "100vh",
            paddingTop:{xs:'10%', sm: '10%', md:'0px'},
            paddingLeft:{xs:'10%',sm: '10%', md:'0px'},
            paddingRight:{xs:'10%',sm: '10%', md:'0px'},
            margin:{xs:'20px', md:'20px'}
            
            

          }}
          cols={3}
          gap={4}
        >
          {characters &&
            characters.map((character) => (
              <CardItem key={character.id} {...character} />
            ))}
        </List>
      </Grid>
    </PrincipalLayout>
  );
};
