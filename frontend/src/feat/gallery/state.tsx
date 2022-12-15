import { atom, useAtom, useAtomValue, useSetAtom } from "jotai";
import { ImageType } from "./types";

export const galleryImagesAtom = atom<ImageType[] | []>([]);
export const setGalleryImages = () => useSetAtom(galleryImagesAtom);
export const getGalleryImages = () => useAtomValue(galleryImagesAtom);

export const useGalleryImagesAtom = () => useAtom(galleryImagesAtom);
