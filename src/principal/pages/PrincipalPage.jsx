
import { ImageGallery } from "../components/ImageGallery";
import { PrincipalLayout } from "../layout/PrincipalLayout";

export const PrincipalPage = () => {
  return (
    <PrincipalLayout>
      {/* <Typography>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur
        nam iusto tenetur delectus deserunt id reiciendis assumenda quia
        possimus, perspiciatis excepturi quasi voluptas facere commodi libero
        consequuntur, ea earum natus!
      </Typography> */}
      <ImageGallery />
    </PrincipalLayout>
  );
};
