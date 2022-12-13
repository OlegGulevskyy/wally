import { atom, useAtom } from "jotai";
import { AppSettings } from "./types";

export const settingsAtom = atom<AppSettings>({
  isOpen: false,
  theme: "dark",
  apiKey: null,
});

export const useAppSettings = () => useAtom(settingsAtom);
