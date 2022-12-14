import { atom, useAtom } from "jotai";

export const searchQueryAtom = atom<string>("");
export const useSearchQuery = () => useAtom(searchQueryAtom);
