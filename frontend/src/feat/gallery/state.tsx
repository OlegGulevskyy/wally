import { atom, useAtom, useAtomValue, useSetAtom } from "jotai";
import { Image } from "./types";

export const galleryImagesAtom = atom<Image[] | []>([]);
export const setGalleryImages = () => useSetAtom(galleryImagesAtom);
export const getGalleryImages = () => useAtomValue(galleryImagesAtom);

export const useGalleryImagesAtom = () => useAtom(galleryImagesAtom);
