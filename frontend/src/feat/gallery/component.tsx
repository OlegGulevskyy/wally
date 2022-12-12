import { Card, Image, Grid, createStyles } from "@mantine/core";
import { getGalleryImages } from "./state";
import type { Image as ImageType } from "./types";

const useStyles = createStyles((theme, _, ref) => ({
  image: {
		transitions: "all 0.3s ease",
		WebkitTransition: "all 0.3s ease",
    "&:hover": {
      WebkitFilter: "brightness(70%)",
    },
  },
}));

const ImageCard = ({ src, alt }: ImageType) => {
	const { classes } = useStyles()
  return (
    <Card shadow="sm" p="xs" radius="md">
      <Card.Section>
        <Image className={classes.image} fit="cover" src={src.original} height={160} alt={alt} radius="md" />
      </Card.Section>
    </Card>
  );
};

export const Gallery = () => {
  const images = getGalleryImages();

  console.log("IMAGES ", images);

  // return image cards based on array of images
  return (
    <>
      <Grid grow gutter="lg">
        {images?.map((image) => (
          <Grid.Col span={4}>
            <ImageCard {...image} />
          </Grid.Col>
        ))}
      </Grid>
    </>
  );
};
