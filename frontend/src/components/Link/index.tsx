import type { FC } from "react";
import { createStyles, Text } from "@mantine/core";
import { OpenUrlSystemBrowser } from "../../../wailsjs/go/main/App";

type LinkProps = {
  label: string;
  href: string;
};

const useStyles = createStyles(() => ({
  link: {
    cursor: "pointer",
  },
}));

export const Link: FC<LinkProps> = ({ label, href }) => {
  const { classes } = useStyles();
  return (
    <Text
      className={classes.link}
      span
      color="orange.4"
      onClick={() => OpenUrlSystemBrowser(href)}
    >
      {label}
    </Text>
  );
};
