import { List, ThemeIcon, Text, createStyles } from "@mantine/core";
import { IconCircleDashed } from "@tabler/icons";
import { OpenUrlSystemBrowser } from "../../../wailsjs/go/main/App";
import { useAppSettings } from "../settings";

const useStyles = createStyles((theme) => ({
  link: {
    cursor: "pointer",
  },
}));

export const Onboarding = () => {
  const { classes } = useStyles();
  const handleOpenUrl = (url: string) => {
    OpenUrlSystemBrowser(url);
  };

  const [appSettings, setAppSettings] = useAppSettings();

  const handleOpenSettings = () => {
    setAppSettings({ ...appSettings, isOpen: true });
  };

  return (
    <List
      spacing="xs"
      size="sm"
      center
      icon={
        <ThemeIcon color="blue" size={24} radius="xl">
          <IconCircleDashed size={16} />
        </ThemeIcon>
      }
    >
      <List.Item>
        Create an account with{" "}
        <Text
          span
          c="teal.4"
          className={classes.link}
          onClick={() => handleOpenUrl("https://www.pexels.com/")}
        >
          Pexel.com
        </Text>
      </List.Item>
      <List.Item>
        <Text
          span
          c="teal.4"
          className={classes.link}
          onClick={() => handleOpenUrl("https://www.pexels.com/api/new/")}
        >
          Create an API Key
        </Text>{" "}
        to be able to fetch wallpapers
      </List.Item>
      <List.Item>
        Save your new API Key in
        <Text
          span
          c="teal.4"
          className={classes.link}
          onClick={handleOpenSettings}
        >
          {" "}
          Wally Settings
        </Text>
      </List.Item>
      <List.Item>Start searching for wallpapers! :)</List.Item>
    </List>
  );
};
