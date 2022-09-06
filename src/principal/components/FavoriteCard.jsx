import { Link as RouterLink, useNavigate } from "react-router-dom";
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
  Button,
  Checkbox,
} from "@mui/material";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { InfoCharacter } from "../pages";


const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
export const CardItem = ({id, favorite, name, species, }) => {
const navigate = useNavigate();
 
  const dispatch = useDispatch()
  const onClickAddFavorite = () => {
      dispatch(addFavoriteCharacter({title, image, species}))
  }
  return (
    <Card sx={{ maxWidth: 345, marginBottom: 5 , marginRight:10}} key={title}>
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
          <Checkbox {...label} defaultChecked
        sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }} />
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
          <AddShoppingCartIcon onClick={onClickAddFavorite} disbled={isSaving} />
        </IconButton>
       
        <Button
          variant="contained"
          color="primary"
          onClick={() => {navigate(<InfoCharacter />)}}
        >
          Más información
        </Button>
       
      </CardActions>
    </Card>
  );
};
