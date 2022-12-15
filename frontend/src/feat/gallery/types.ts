export type ImageType = {
  id: string;
  url: string;
  photographer: string;
  photographer_url: string;
  width: number;
  height: number;
  src: {
    original: string;
    large2x: string;
    medium: string;
    small: string;
    portrait: string;
    landscape: string;
    tiny: string;
  };
  alt: string;
};

export type ImageCardProps = {
  onCardClick: (img: ImageType) => void;
} & ImageType;
