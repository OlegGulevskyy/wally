import { ActionIcon, Container, Group, Header } from "@mantine/core";
import { IconBrandGithub } from "@tabler/icons";
import { Searchbar } from "../../feat/search";
import { ThemeToggle } from "../ThemeToggle";
import { HEADER_HEIGHT, ICON_SIZE } from "./const";

const GithubButton = () => {
  return (
    <ActionIcon variant="outline" color="gray">
      <IconBrandGithub size={ICON_SIZE} />
    </ActionIcon>
  );
};

export const AppHeader = () => {
  return (
    <Header height={HEADER_HEIGHT}>
      <Container fluid style={{ height: "100%", display: "flex" }}>
        <Group
          my="auto"
          style={{ display: "flex", width: "100%" }}
          position="apart"
        >
          {/* left side */}
          <div>Wally Logo</div>

					<Searchbar />

          {/* right side */}
          <Group>
						<GithubButton />
            <ThemeToggle />
          </Group>
        </Group>
      </Container>
    </Header>
  );
};
