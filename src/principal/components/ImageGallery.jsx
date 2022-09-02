import {
  Grid,
  ImageList,
} from "@mui/material";
import { CardItem } from "./CardItem";

export const ImageGallery = () => {
  return (
    <Grid
      container
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      width='100%'
    >
      <ImageList
        sx={{ width: '100%', height: 600 , display:'flex', justifyContent:'space-between', alignItems:'center'}} cols={3} rowHeight={164}
        gap={4}
        
      >
        {itemData && itemData.map((item) => (
                <CardItem key={item.title} item={item} />
          ))}
      </ImageList>
    </Grid>
  );
};

const itemData = [
  {
    img: "https://images.unsplash.com/file-1636585210491-f28ca34ea8ecimage",
    title: "ejemplo1",
  },
  {
    img: "https://images.unsplash.com/file-1636585210491-f28ca34ea8ecimage",
    title: "ejemplo2",
  },
  {
    img: "https://images.unsplash.com/file-1636585210491-f28ca34ea8ecimage",
    title: "ejemplo3",
  },
  {
    img: "https://images.unsplash.com/file-1636585210491-f28ca34ea8ecimage",
    title: "ejemplo4",
  },
];
{
  /* <img src={`${item.img}?w=161&fit=crop&auto=format`} srcSet={`${item.img}?w=161&fit=crop&auto=format&dpr=2 2x`} alt={item.title} loading='lazy' /> */
}
