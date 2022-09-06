import { Link as RouterLink } from "react-router-dom";
import { useDispatch } from 'react-redux'
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
import { addFavorite } from "../../store/principal/characterSlice";

export const CardItem = ({ character }) => {
  const dispatch = useDispatch()
  const onClickAddFavorite = () => {
      dispatch(addFavorite())
  }
  return (
    <Card sx={{ maxWidth: 345, marginBottom: 5 }} key={character.title}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="300"
          alt="green iguana"
          sx={{ padding: 1 }}
          src={character.image}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {character.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {character.species}
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
        <IconButton color="primary" aria-label="add to shopping cart" onClick={onClickAddFavorite}>
          <AddShoppingCartIcon />
        </IconButton>
        <Link
          component={RouterLink}
          size="small"
          color="primary"
          to="/character/:id"
        >
          Más información
        </Link>
      </CardActions>
    </Card>
  );
};
