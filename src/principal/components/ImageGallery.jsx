import { useEffect, useState } from 'react';
import {useSelector, useDispatch } from 'react-redux';

import{
  Button,
  Grid,
  List,
  Typography
} from "@mui/material";
import { CardItem } from "./CardItem";
import { getCharacters } from '../../store/principal/thunks';
import { PrincipalLayout } from '../layout/PrincipalLayout';


export const ImageGallery = () => {

  const {  isLoading, characters, page, prevPage } = useSelector(state  => state.characters);
  const dispatch = useDispatch();
  
  
  useEffect(() => {
    dispatch(getCharacters());
  },[]);
  

 
  
  
  return (
<PrincipalLayout>

    <Grid
      container
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      width='100%'
      height='100vh'
     
    >
      
      
      
      <Grid container alignItems='center' width='100%' justifyContent='space-around' >

      <Button variant="outlined" disabled={isLoading} onClick={ () => dispatch(getCharacters(prevPage)) } >Anterior </Button> 
     
      <Button variant="outlined" disabled={isLoading}  onClick={() => dispatch(getCharacters(page)) }>Siguiente</Button> 
     
      </Grid>
     
      <List
        sx={{ width: '100%', height: 600 , display:'flex', justifyContent:'space-between', alignItems:'center', flexWrap:'wrap'}} cols={3} rowHeight={164}
        gap={4}
        
      >
        {characters && characters.map((character) => (
                <CardItem key={character.id} character={character} />
          ))}
      </List>
      

    
    </Grid>
</PrincipalLayout>
  );
};

// const itemData = [
//   {
//     img: "https://images.unsplash.com/file-1636585210491-f28ca34ea8ecimage",
//     title: "ejemplo1",
//   },
//   {
//     img: "https://images.unsplash.com/file-1636585210491-f28ca34ea8ecimage",
//     title: "ejemplo2",
//   },
//   {
//     img: "https://images.unsplash.com/file-1636585210491-f28ca34ea8ecimage",
//     title: "ejemplo3",
//   },
//   {
//     img: "https://images.unsplash.com/file-1636585210491-f28ca34ea8ecimage",
//     title: "ejemplo4",
//   },
// ];
{
  /* <img src={`${item.img}?w=161&fit=crop&auto=format`} srcSet={`${item.img}?w=161&fit=crop&auto=format&dpr=2 2x`} alt={item.title} loading='lazy' /> */
}
