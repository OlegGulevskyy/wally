import {
  AppShell as MntAppShell,
  Text,
  useMantineTheme,
} from "@mantine/core";

import { Header } from "../Header";

export const AppShell = () => {
  const theme = useMantineTheme();
  return (
    <MntAppShell
      styles={{
        main: {
          background:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      }}
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      header={<Header />}
    >
      <Text>Gallery previews</Text>
    </MntAppShell>
  );
};
