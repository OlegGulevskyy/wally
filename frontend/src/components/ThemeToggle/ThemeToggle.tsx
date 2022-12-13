import { ActionIcon, Tooltip, useMantineColorScheme } from "@mantine/core";
import { IconSun, IconMoonStars } from "@tabler/icons";
import { ICON_SIZE } from "../Header/const";

export const ThemeToggle = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";

  return (
		<Tooltip label={`Make it ${dark ? 'light' : 'dark'}`}>
    <ActionIcon
      variant="default"
      color={dark ? "yellow" : "blue"}
      onClick={() => toggleColorScheme()}
      title="Toggle color scheme"
    >
      {dark ? <IconSun size={ICON_SIZE} /> : <IconMoonStars size={ICON_SIZE} />}
    </ActionIcon>
		</Tooltip>
  );
};
