import { MantineProvider } from "@mantine/core";
import { AppShell } from "./components/AppShell/AppShell";

export const App = () => {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <AppShell />
    </MantineProvider>
  );
};
