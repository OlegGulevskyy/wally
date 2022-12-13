import { useState } from "react";
import { Card, Image, Grid, createStyles, Button, Group } from "@mantine/core";
import { getGalleryImages as galleryImagesValues } from "./state";
import type { Image as ImageType } from "./types";
import { SetWallpaper } from "../../../wailsjs/go/main/App";

const useStyles = createStyles(() => ({
  card: {
    position: "relative",
  },
  cardMenu: {
    position: "absolute",
    top: 0,
    left: 0,
    height: "100%",
    width: "100%",
    background: "rgba(0, 0, 0, 0.5)",
  },
  cardButtons: {
    position: "absolute",
    top: "70%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
}));

const ImageCard = ({ src, alt }: ImageType) => {
  const { classes } = useStyles();
  const [showMenu, setShowMenu] = useState(false);

  const handleSetAsWallpaper = (src: string) => {
    SetWallpaper(src);
  };

  return (
    <Card
      shadow="sm"
      p="xs"
      radius="md"
      onMouseEnter={() => setShowMenu(() => true)}
      onMouseLeave={() => setShowMenu(() => false)}
      className={classes.card}
    >
      <Card.Section>
        <Image
          fit="cover"
          src={src.medium}
          height={160}
          alt={alt}
          radius="md"
        />
        {showMenu && (
          <div className={classes.cardMenu}>
            <Group noWrap position="center" className={classes.cardButtons}>
              <Button
                variant="gradient"
                onClick={(_) => handleSetAsWallpaper(src.original)}
              >
                Set as wallpaper
              </Button>

              {/* disabled for now, later some additional options, maybe */}
              <Button variant="subtle" color="dark">
                Options
              </Button>
            </Group>
          </div>
        )}
      </Card.Section>
    </Card>
  );
};

export const Gallery = () => {
  const images = galleryImagesValues();

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
