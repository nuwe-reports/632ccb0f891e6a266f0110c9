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

import { addFavoriteCharacter, startDeletingFavorite } from "../../store/principal/thunks";
import { setActiveCharacter, setActiveFavorite } from "../../store/principal/characterSlice";
import { FavoriteButton } from "./FavoriteButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { isInfavorite } from "../../helpers/isInfavorites";
import { DeleteOutlined } from "@mui/icons-material";



export const CardItem = ({ title, url, image, id, species, name, created,status }) => {
  const { favorites, active } = useSelector((state) => state.characters);
 
   
  const dispatch = useDispatch();

  const onClickAddFavorite = () => {
    dispatch(addFavoriteCharacter({ url, image, species, name, id, created,status }));
  };

  const onCLickSelectCharacter = () => {
    dispatch(setActiveCharacter({  image, id, species, name, created,status }));
    
  };
  
  const onClickFavorite = () => {
    dispatch(setActiveFavorite({ image, id, species, name, created,status }));
  };

  const onDelete = (name) => {
    dispatch(startDeletingFavorite(name, favorites))
  }
 

  return (
    <Card
      sx={{ maxWidth: 540, marginBottom: 2 }}
      key={title}
      onClick={onCLickSelectCharacter}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="300"
          alt={title}
          sx={{ padding: 1,marginBottom:1 }}
          src={image}

        />
        <CardContent>
        {isInfavorite(created,favorites) ? <FavoriteIcon style={{position:'relative', bottom:'310px', left:'230px', fontSize:'40px'}} color="success" /> : <FavoriteIcon color='warning' style={{position:'relative', bottom:'310px', left:'230px', fontSize:'40px'}}/>}
        
          <Typography  variant="h5" component="div">
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
        {isInfavorite(created, favorites) ? (
          <>
            {" "}
            <Button color="primary" onClick={ onDelete }   >
                <DeleteOutlined color="error" />
            </Button>
           </>
        ) : (
          <Button onClick={onClickAddFavorite}>
            <FavoriteButton />
          </Button>
        )}

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
