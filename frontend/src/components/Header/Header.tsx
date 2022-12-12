import { Header, Text } from "@mantine/core";

export const AppHeader = () => {
  return (
    <Header height={{ base: 50, md: 70 }} p="md">
      <div style={{ display: "flex", alignItems: "center", height: "100%" }}>
        <Text>HA</Text>
      </div>
    </Header>
  );
};
