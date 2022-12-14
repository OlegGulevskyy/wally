import {
  ColorScheme,
  ColorSchemeProvider,
  MantineProvider,
} from "@mantine/core";

import { AppShell } from "./components/AppShell";
import { NotificationsProvider } from "@mantine/notifications";
import { useApp } from "./feat/settings/state";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/query";

export const App = () => {
  const { theme, updateTheme } = useApp();

  return (
    <ColorSchemeProvider
      colorScheme={theme as ColorScheme}
      toggleColorScheme={updateTheme}
    >
      <QueryClientProvider client={queryClient}>
        <MantineProvider
          withGlobalStyles
          withNormalizeCSS
          theme={{ colorScheme: theme as ColorScheme }}
        >
          <NotificationsProvider>
            <AppShell />
          </NotificationsProvider>
        </MantineProvider>
      </QueryClientProvider>
    </ColorSchemeProvider>
  );
};
