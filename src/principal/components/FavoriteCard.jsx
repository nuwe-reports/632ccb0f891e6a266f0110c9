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
  Checkbox,
} from "@mui/material";
import {DeleteOutlined} from '@mui/icons-material';
import { startDeletingFavorite } from "../../store/principal/thunks";
import { setActiveFavorite } from "../../store/principal/characterSlice";




export const FavoriteCard = ({ title, url, image, id, species, name }) => {
  const dispatch = useDispatch();

  const onClickFavorite = () => {
      dispatch(setActiveFavorite({ image, id, species, name}))
  }
  const { favorites } = useSelector(state => state.characters);
  

  const onDelete = (id) => {
    dispatch(startDeletingFavorite(id));
  }

  return (
    <Card sx={{ maxWidth: 345, marginBottom: 5 }} key={title}  >
      <CardActionArea>
        <Checkbox onClick={onClickFavorite} />
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
        <IconButton color="primary"  >
          <DeleteOutlined onClick={onDelete} color='error'/>
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
