import { useEffect, useState } from "react";
import {
  ColorScheme,
  ColorSchemeProvider,
  MantineProvider,
} from "@mantine/core";

import { AppShell } from "./components/AppShell";
import { NotificationsProvider } from "@mantine/notifications";
import { GetTheme, SetTheme } from "../wailsjs/go/main/App";
import { useApp } from "./feat/settings/state";

export const App = () => {
  const { theme, updateTheme } = useApp();
  /* const [colorScheme, setColorScheme] = useState<ColorScheme>(theme); */
  /* const toggleColorScheme = (value?: ColorScheme) => { */
  /*   setColorScheme((current) => { */
  /*     const next = value || (current === "dark" ? "light" : "dark"); */
  /*     SetTheme(next); */
  /*     return next; */
  /*   }); */
  /* }; */

  /* useEffect(() => { */
  /*   GetTheme().then((theme) => setColorScheme(theme as ColorScheme)); */
  /* }, []); */

  return (
    <ColorSchemeProvider
      colorScheme={theme as ColorScheme}
      toggleColorScheme={updateTheme}
    >
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{ colorScheme: theme as ColorScheme }}
      >
        <NotificationsProvider>
          <AppShell />
        </NotificationsProvider>
      </MantineProvider>
    </ColorSchemeProvider>
  );
};
