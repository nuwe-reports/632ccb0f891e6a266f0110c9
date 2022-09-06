import { Link as RouterLink } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import {
  Typography,
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
  CardActions,
  Link,
  IconButton,
} from "@mui/material";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

import { addFavoriteCharacter } from "../../store/principal/thunks";

export const CardItem = ({ title, url, image, id, species, name }) => {
  
  const dispatch = useDispatch()
  const onClickAddFavorite = () => {
      dispatch(addFavoriteCharacter({ url, image,  species, name}))
  }
  return (
    <Card sx={{ maxWidth: 345, marginBottom: 5 }} key={title}>
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
        <IconButton color="primary" aria-label="add to shopping cart" >
          <AddShoppingCartIcon onClick={onClickAddFavorite}  />
        </IconButton>
        <Link
          component={RouterLink}
          size="small"
          color="primary"
          to={`/character/:${id}`}
        >
          Más información
        </Link>
      </CardActions>
    </Card>
  );
};
