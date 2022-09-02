import { Link as RouterLink } from "react-router-dom";
import {
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
  CardActionArea,
  CardActions,
  Link
} from "@mui/material";

export const CardItem = ({item}) => {
  return (
    <Card sx={{ maxWidth: 345}} key={item.title}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="300"
          image="https://images.unsplash.com/file-1636585210491-f28ca34ea8ecimage"
          alt="green iguana"
          sx={{padding:1}}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Link component={RouterLink} size="small" color="primary" to='/favorites'>
          Favoritos
        </Link>
      </CardActions>
    </Card>
  );
};
