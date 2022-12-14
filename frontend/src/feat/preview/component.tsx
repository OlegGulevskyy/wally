import { Box, Image } from "@mantine/core";
import type { ImageType as ImageType } from "../gallery/types";

type PreviewProps = {
  image: ImageType;
};

export const Preview = ({ image }: PreviewProps) => {
  return (
    <Box>
      <Image src={image.src.original} />
    </Box>
  );
};
