import { useDispatch } from "react-redux";
import {
  Typography,
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
  CardActions,
  Button,
} from "@mui/material";
import { DeleteOutlined } from "@mui/icons-material";
import { startDeletingFavoriteById } from "../../store/principal/thunks";
import { setActiveFavorite } from "../../store/principal/characterSlice";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.css";

export const FavoriteCard = ({ title, image, id, species, name, created }) => {
  const dispatch = useDispatch();

  const onClickFavorite = () => {
    dispatch(setActiveFavorite({ image, id, species, name, created }));
  };

  const onDelete = (id) => {
    dispatch(startDeletingFavoriteById(id));

    Swal.fire({
      position: "center",
      icon: "success",
      title: "Eliminado correctamente",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <Card
      sx={{ maxWidth: 600, marginBottom: 5, marginRight:5 }}
      key={title}
      className="animate__animated animate__fadeIn"
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="300"
          alt={title}
          sx={{ padding: 1 }}
          src={image}
          onClick={onClickFavorite}
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
        <Button color="primary" onClick={onDelete}>
          <DeleteOutlined style={{ fontSize: 30 }} color="error" />
        </Button>
      </CardActions>
    </Card>
  );
};
