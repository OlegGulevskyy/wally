import { useHotkeys, useWindowEvent } from "@mantine/hooks";
import { useImages } from "../../data/useImages";
import { MAIN_SEARCH_TRIGGER_SHORTCUT } from "./const";

type UseLogicProps = {
  inputRef: React.RefObject<HTMLInputElement>;
};

export const useLogic = ({ inputRef }: UseLogicProps) => {
  const { searchQuery, setSearchQuery, refetch } = useImages();

  const onInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    refetch();
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
    inputValue: searchQuery,
    onInput,
    handleSubmit,
  };
};
