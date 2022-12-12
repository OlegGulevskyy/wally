import { useHotkeys, useWindowEvent } from "@mantine/hooks";
import { useState } from "react";
import { GetImages } from "../../../wailsjs/go/main/App";
import { MAIN_SEARCH_TRIGGER_SHORTCUT } from "./const";

type UseLogicProps = {
  inputRef: React.RefObject<HTMLInputElement>;
};

export const useLogic = ({ inputRef }: UseLogicProps) => {
  const [searchReq, setSearchReq] = useState("");
  const [_, setImages] = useState([]);

  const onInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchReq(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    GetImages({ query: searchReq }).then((data) => {
      setImages(data);
    });
  };

  useWindowEvent("keydown", ({ key }) => {
    if (key === "Escape") {
      defocusInput();
    }
  });

  const focusInput = () => {
    inputRef.current?.focus();
  };

  const defocusInput = () => {
    inputRef.current?.blur();
  };

  useHotkeys([[MAIN_SEARCH_TRIGGER_SHORTCUT, focusInput]]);

  return {
    inputValue: searchReq,
    onInput,
    handleSubmit,
  };
};
