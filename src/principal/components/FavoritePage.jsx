import { Link as RouterLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { Grid, Link } from "@mui/material";


export const FavoritePage = () => {
  const { active } = useSelector((state) => state.characters);

  const { name, image, species, created, status } = active;

  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        gap="20px"
        width="100%"
        height="100vh"
        className="animate__animated animate__fadeIn"
        style={{ backgroundColor: "#49ff2d" }}
      >
        <Grid item display="flex" flexDirection="column" color="slategray">
          <h1> Nombre: {name} </h1>
          <h3> Status: {status} </h3>
          <h4> Specie: {species} </h4>
          <h6> Creado: {created}</h6>
          <Link
            sx={{
              fontSize: "25px",
              textDecoration: "none",
              border: "1px solid black",
              textAlign: "center",
              backgroundColor: "whitesmoke",
              borderRadius: "5px",
              objectFit: "cover",
              objectPosition: "center",
            }}
            component={RouterLink}
            size="small"
            color="primary"
            to={"/"}
          >
            Principal
          </Link>
        </Grid>
        <Grid item>
          <img
            src={image}
            alt="imagendelpersonaje"
            width="500px"
            style={{ borderRadius: "50%" }}
          />
        </Grid>
      </Grid>
    </>
  );
};
