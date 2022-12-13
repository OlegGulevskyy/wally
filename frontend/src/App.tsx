import { useEffect, useState } from "react";
import {
  ColorScheme,
  ColorSchemeProvider,
  MantineProvider,
} from "@mantine/core";

import { AppShell } from "./components/AppShell";
import { NotificationsProvider } from "@mantine/notifications";
import { GetTheme, SetTheme } from "../wailsjs/go/main/App";

export const App = () => {
  const [colorScheme, setColorScheme] = useState<ColorScheme>("dark");
  const toggleColorScheme = (value?: ColorScheme) => {
    setColorScheme((current) => {
      const next = value || (current === "dark" ? "light" : "dark");
      SetTheme(next);
      return next;
    });
  };

  useEffect(() => {
    GetTheme().then((theme) => setColorScheme(theme as ColorScheme));
  }, []);

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{ colorScheme }}
      >
        <NotificationsProvider>
          <AppShell />
        </NotificationsProvider>
      </MantineProvider>
    </ColorSchemeProvider>
  );
};
