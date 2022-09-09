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
  Button,
} from "@mui/material";
import {DeleteOutlined} from '@mui/icons-material';
import { startDeletingFavorite } from "../../store/principal/thunks";
import { setActiveFavorite } from "../../store/principal/characterSlice";





export const FavoriteCard = ({ title,  image, id, species, name, created }) => {
  const { favorites } = useSelector(state => state.characters)
  const dispatch = useDispatch();

  const onClickFavorite = () => {
      dispatch(setActiveFavorite({ image, id, species, name, created}))
  }
 
  const onDelete = (id) => {
    dispatch(startDeletingFavorite(id));
  }


  return (
    <Card sx={{ maxWidth: 345, marginBottom: 5 }} key={title} className='animate__animated animate__fadeIn' onClick={onClickFavorite}  >
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
          justifyContent: "center",
        }}
      >
        <Button color="primary"  >
         <DeleteOutlined style={{fontSize:30}} onClick={onDelete} color='error' />  
        </Button>
        
      </CardActions>
    </Card>
  );
};
