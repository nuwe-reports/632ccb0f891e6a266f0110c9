import { Link as RouterLink } from "react-router-dom";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Link,
  
  Typography,
} from "@mui/material";

import { useSelector } from "react-redux";

export const FavoritePage = () => {
  const { active, characters } = useSelector((state) => state.characters);
 
  const { name, id, image, species, created } = active;
  

  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="space-around"
        alignItems="center"
        width="100%"
        height="100vh"
        className="animate__animated animate__fadeIn"
        style={{ backgroundColor: "steelblue" }}
      >
        <Card sx={{ maxWidth: 345, marginBottom: 5 }} key={id}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="300"
              alt={name}
              sx={{ padding: 1 }}
              image={image}
            />
            <CardContent>
              <Typography gutterBottom variant="h4" component="div">
                Name: {name}
              </Typography>
              <Typography variant="h6" color="text.secondary">
                Specie: {species}
              </Typography>
              <Typography variant="span" color="text.secondary">
                Created: {created}
              </Typography>
            

            </CardContent>
          </CardActionArea>
          <CardActions
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Link sx={{
              fontSize:'25px',
              textDecoration:'none'
            }} component={RouterLink} size="small" color="primary" to={"/"}>
              Home
            </Link>
          </CardActions>
        </Card>
      </Grid>
    </>
  );
};
