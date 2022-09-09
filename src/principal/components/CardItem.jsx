import { Link as RouterLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  Typography,
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
  CardActions,
  Link,
  Button,
} from "@mui/material";

import { addFavoriteCharacter } from "../../store/principal/thunks";
import {
  
  isInFavoriteByName,
  setActiveFavorite,
} from "../../store/principal/characterSlice";
import { FavoriteButton } from "./FavoriteButton";
import FavoriteIcon from "@mui/icons-material/Favorite";


export const CardItem = ({ title, url, image, id, species, name, created }) => {
  const { favorites, characters } = useSelector((state) => state.characters);



  const dispatch = useDispatch();
  const onClickAddFavorite = () => {
    dispatch(addFavoriteCharacter({ url, image, species, name, id }));
    
  };

  const onCLickSelectCharacter = () => {
    dispatch(setActiveFavorite({ image, id, species, name, created }));
  };

  const onClickFavorite = () => {
    dispatch(setActiveFavorite({ image, id, species, name }));
  };




  return (
    <Card
      sx={{ maxWidth: 450, marginBottom: 5 }}
      key={title}
      onClick={onClickFavorite}
    >
      <CardActionArea >
        <CardMedia
          component="img"
          height="300"
          alt={title}
          sx={{ padding: 1 }}
          src={image}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {species}
          </Typography>
        </CardContent>
      </CardActionArea>

      <CardActions
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
   <FavoriteIcon /> :  <Button onClick={onClickAddFavorite}>
            <FavoriteButton />
          </Button>
  
      

      
       
        

      
          
        
        
       

        <Link
          component={RouterLink}
          size="small"
          color="primary"
          to={`character/${id}`}
        >
          <Button onClick={onCLickSelectCharacter}>Más información </Button>
        </Link>
      </CardActions>
    </Card>
  );
};
