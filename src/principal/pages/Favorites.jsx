import { Grid, ImageList } from "@mui/material";
import { CardItem } from "../components/CardItem";
import { PrincipalLayout } from "../layout/PrincipalLayout";

export const Favorites = () => {
  return (
    <PrincipalLayout>
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        width="100%"
        style={{ backgroundColor: "beige", height: "100vh" }}
      >
        <ImageList
          sx={{
            width: "100%",
            height: 600,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
          cols={3}
          rowHeight={164}
          gap={4}
        >
          {itemData &&
            itemData.map((item) => <CardItem key={item.title} item={item} />)}
        </ImageList>
      </Grid>
    </PrincipalLayout>
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
