import {
  AppShell as MntAppShell,
  Header,
  Text,
  useMantineTheme,
} from "@mantine/core";

export const AppShell = () => {
  const theme = useMantineTheme();
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
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      header={
        <Header height={{ base: 50, md: 70 }} p="md">
          <div
            style={{ display: "flex", alignItems: "center", height: "100%" }}
          >
            <Text>HEADER</Text>
          </div>
        </Header>
      }
    >
      <Text>Gallery previews</Text>
    </MntAppShell>
  );
};
