import { createStyles, Group, Text } from "@mantine/core";
import { Link } from "../Link";

const useStyles = createStyles((theme) => ({
  footer: {
    position: "sticky",
    bottom: 0,
    left: 0,
    right: 0,
    textAlign: "center",
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[6]
        : theme.colors.gray[0],
    padding: theme.spacing.md,

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[5]
          : theme.colors.gray[1],
    },
  },
}));

export const Footer = () => {
  const { classes } = useStyles();
  return (
    <Group className={classes.footer} position="center">
      <Text size="sm" color="dimmed">
        Made with ❤️ by{" "}
        <Link label="OlegGulevskyy" href="https://github.com/OlegGulevskyy" />
      </Text>
      <Text size="sm" color="dimmed">
        Powered by <Link label="Wails" href="https://wails.io/" />
      </Text>
      <Text size="sm" color="dimmed">
        Images from <Link label="Pexel.com" href="https://www.pexels.com/" />
      </Text>
    </Group>
  );
};
