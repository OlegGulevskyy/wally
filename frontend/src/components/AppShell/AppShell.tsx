import { AppShell as MntAppShell, useMantineTheme } from "@mantine/core";

import { Gallery } from "../../feat/gallery";
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
      header={<Header />}
    >
      <Gallery />
    </MntAppShell>
  );
};
