import { useState } from "react";
import {
  Card,
  Image,
  Grid,
  createStyles,
  Button,
  Group,
  Modal,
  Title,
  Space,
} from "@mantine/core";
import InfinitScroll from "react-infinite-scroll-component";

import type { Image as ImageType } from "./types";
import { SetWallpaper } from "../../../wailsjs/go/main/App";
import { Preview } from "../preview";
import { useImages } from "../../data/useImages";

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

type ImageCardProps = {
  onCardClick: (img: ImageType) => void;
} & ImageType;

const ImageCard = ({
  src,
  alt,
  photographer,
  onCardClick,
  ...rest
}: ImageCardProps) => {
  const { classes } = useStyles();
  const [showMenu, setShowMenu] = useState(false);

  const handleSetAsWallpaper = (src: string) => {
    SetWallpaper(src);
  };

  return (
    <>
      <Card
        shadow="sm"
        p="xs"
        radius="md"
        onMouseEnter={() => setShowMenu(() => true)}
        onMouseLeave={() => setShowMenu(() => false)}
        className={classes.card}
        onClick={() => onCardClick({ ...rest, src, alt, photographer })}
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
    </>
  );
};

export const Gallery = () => {
  const { hasNextPage, allImages, fetchNextPage } = useImages();

  const [
    selectedImageForPreview,
    setSelectedImageForPreview,
  ] = useState<ImageType | null>(null);

  const handleImageCardClick = (img: ImageType) => {
    setSelectedImageForPreview({ ...img });
  };

  // return image cards based on array of images
  return (
    <>
      <Modal
        opened={Boolean(selectedImageForPreview)}
        onClose={() => setSelectedImageForPreview(null)}
        withCloseButton={false}
        centered
        size={"100%"}
        overlayBlur={5}
      >
        {selectedImageForPreview && <Preview image={selectedImageForPreview} />}
      </Modal>
      <Title order={3} color="dimmed">
        Let's dig for some wallpapers!
      </Title>
      <Space h="md" />
      <InfinitScroll
        dataLength={allImages?.length ?? 0}
        next={() => fetchNextPage()}
        hasMore={hasNextPage}
        loader={<h4>Loading...</h4>}
      >
        <Grid grow gutter="lg">
          {allImages?.map((image) => (
            <Grid.Col span={4} key={image.url}>
              <ImageCard {...image} onCardClick={handleImageCardClick} />
            </Grid.Col>
          ))}
        </Grid>
      </InfinitScroll>
    </>
  );
};
