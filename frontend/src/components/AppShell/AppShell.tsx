import {
  AppShell as MntAppShell,
  Modal,
  Stack,
  useMantineTheme,
} from "@mantine/core";

import { Gallery } from "../../feat/gallery";
import { Onboarding } from "../../feat/onboarding";
import { Settings } from "../../feat/settings";
import { useApp } from "../../feat/settings/state";
import { Header } from "../Header";
import { Footer } from "../Footer";

export const AppShell = () => {
  const theme = useMantineTheme();
  const { apiKey, isOpen, toggleAppSettings } = useApp();

  return (
    <MntAppShell
      styles={{
        main: {
          background:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
          position: "relative",
        },
      }}
      header={<Header />}
    >
      <Stack style={{ height: "100%" }}>
        <div style={{ height: "100%", position: "relative" }}>
          <Modal title="Settings" opened={isOpen} onClose={toggleAppSettings}>
            <Settings />
          </Modal>
          {apiKey ? <Gallery /> : <Onboarding />}
        </div>
        <Footer />
      </Stack>
    </MntAppShell>
  );
};
