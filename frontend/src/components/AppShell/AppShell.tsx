import { AppShell as MntAppShell, Modal, useMantineTheme } from "@mantine/core";

import { Gallery } from "../../feat/gallery";
import { Settings, useAppSettings } from "../../feat/settings";
import { Header } from "../Header";

export const AppShell = () => {
  const theme = useMantineTheme();
  const [appSettings, setAppSettingsOpened] = useAppSettings();

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
      <Modal
				title="Settings"
        opened={appSettings.isOpen}
        onClose={() => setAppSettingsOpened({ ...appSettings, isOpen: false })}
      >
        <Settings />
      </Modal>
      <Gallery />
    </MntAppShell>
  );
};
