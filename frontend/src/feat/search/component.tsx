import { Kbd, TextInput } from "@mantine/core";
import { IconSearch } from "@tabler/icons";
import { useRef } from "react";
import { useLogic } from "./logic";

export const Searchbar = () => {
	const inputRef = useRef(null);

  const { onInput, inputValue } = useLogic({ inputRef });

  const rightSection = (
    <div style={{ display: "flex", alignItems: "center" }}>
      <Kbd>Ctrl</Kbd>
      <span style={{ margin: "0 5px" }}>+</span>
      <Kbd>K</Kbd>
    </div>
  );

  return (
    <TextInput
      placeholder="Search wallpapers.."
      icon={<IconSearch size={16} />}
      rightSectionWidth={90}
      rightSection={rightSection}
      styles={{ rightSection: { pointerEvents: "none" } }}
			ref={inputRef}
			value={inputValue}
			onChange={onInput}
    />
  );
};
