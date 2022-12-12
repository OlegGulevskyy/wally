import { Container, Input } from "@mantine/core";
import { IconSearch } from "@tabler/icons";

export const Searchbar = () => {
  return (
    <Container fluid style={{ width: '500px' }}>
      <Input
        icon={<IconSearch size={18} />}
        variant="filled"
        placeholder="Search your next wallpaper..."
      />
    </Container>
  );
};
