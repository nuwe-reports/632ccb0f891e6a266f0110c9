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
import { setActiveFavorite } from "../../store/principal/characterSlice";
import { FavoriteButton } from "./FavoriteButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { isInfavorite } from "../../helpers/isInfavorites";
import {DeleteOutlined} from '@mui/icons-material';
import { startDeletingFavorite } from "../../store/principal/thunks";

export const CardItem = ({ title, url, image, id, species, name, created }) => {
  const { favorites } = useSelector((state) => state.characters);
  const dispatch = useDispatch();
  const onClickAddFavorite = () => {
    dispatch(addFavoriteCharacter({ url, image, species, name, id, created }));
  };

  const onCLickSelectCharacter = () => {
    dispatch(setActiveFavorite({ url, image, id, species, name, created }));
  };

  const onClickFavorite = () => {
    dispatch(setActiveFavorite({ image, id, species, name, created }));
  };

  const onDelete = (id) => {
    dispatch(startDeletingFavorite(id));
  }

  return (
    <Card
      sx={{ maxWidth: 450, marginBottom: 5 }}
      key={title}
      onClick={onClickFavorite}
    >
      <CardActionArea>
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
        {isInfavorite(created, favorites) ? (
          <>

          <FavoriteIcon color="success" /> <Button color="primary" onClick={onDelete}   >
         <DeleteOutlined style={{fontSize:30}} onClick={onClickFavorite} color='error' />  
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
