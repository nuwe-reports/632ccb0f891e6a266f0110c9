import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Link,Grid } from '@mui/material';
import { Link as RouterLink} from 'react-router-dom'

export const InfoCharacter = () =>  {
  return (
      <Grid
    container
    direction="row"
    justifyContent="center"
    alignItems="center"
    width="100%"
    height='100vh'
    backgroundColor='beige'
    
  >

    <Card sx={{ maxWidth: 500, marginRight:'200px'}}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="500"
        image="https://images.unsplash.com/file-1636585210491-f28ca34ea8ecimage"
        
        
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
      <CardActions>
        <Link component={RouterLink} size="small" to='/'>Atras</Link>
        
      </CardActions>
    </Card>
    </Grid>
  );
}
