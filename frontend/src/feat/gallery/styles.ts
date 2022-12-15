import { createStyles } from "@mantine/core";

export const useStyles = createStyles(() => ({
  card: {
    position: "relative",
  },
  cardMenu: {
    position: "absolute",
    top: 0,
    left: 0,
    height: "100%",
    width: "100%",
    background: "rgba(0, 0, 0, 0.5)",
  },
  cardButtons: {
    position: "absolute",
    top: "70%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
}));
