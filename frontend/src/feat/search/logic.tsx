import { useHotkeys, useWindowEvent } from "@mantine/hooks";
import { useState } from "react";
import { MAIN_SEARCH_TRIGGER_SHORTCUT } from "./const";

type UseLogicProps = {
  inputRef: React.RefObject<HTMLInputElement>;
};

export const useLogic = ({ inputRef }: UseLogicProps) => {
  const [searchReq, setSearchReq] = useState("");

  const onInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchReq(e.target.value);
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
  };
};
