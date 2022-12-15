import { useState } from "react";
import {
  Card,
  Image,
  Grid,
  Button,
  Group,
  Modal,
  Title,
  Space,
} from "@mantine/core";
import InfinitScroll from "react-infinite-scroll-component";

import type { ImageCardProps, ImageType } from "./types";
import { useStyles } from "./styles";
import { SetWallpaper } from "../../../wailsjs/go/main/App";
import { Preview } from "../preview";
import { useImages } from "../../data/useImages";
import { guid } from "../../utils/guid";

const ImageCard = ({
  src,
  alt,
  photographer,
  onCardClick,
  ...rest
}: ImageCardProps) => {
  const { classes } = useStyles();
  const [showMenu, setShowMenu] = useState(false);

  const handleSetAsWallpaper = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    src: string
  ) => {
    e.stopPropagation();
    SetWallpaper(src);
  };

  const handleCardClick = () => {
    onCardClick({ ...rest, src, alt, photographer });
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
        onClick={handleCardClick}
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
            <div className={classes.cardMenu} onClick={handleCardClick}>
              <Group noWrap position="center" className={classes.cardButtons}>
                <Button
                  variant="gradient"
                  onClick={(e) => handleSetAsWallpaper(e, src.original)}
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
            <Grid.Col md={5} lg={3} key={guid()}>
              <ImageCard {...image} onCardClick={handleImageCardClick} />
            </Grid.Col>
          ))}
        </Grid>
      </InfinitScroll>
    </>
  );
};
