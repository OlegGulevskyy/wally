import { ActionIcon, Container, Group, Header } from "@mantine/core";
import { IconBrandGithub } from "@tabler/icons";
import { OpenUrlSystemBrowser } from "../../../wailsjs/go/main/App";
import { Searchbar } from "../../feat/search";
import { ThemeToggle } from "../ThemeToggle";
import { HEADER_HEIGHT, ICON_SIZE } from "./const";

const GithubButton = () => {

	const openGhRepoInBrowser = () => {
		OpenUrlSystemBrowser("https://github.com/OlegGulevskyy/wally")	
	}

  return (
    <ActionIcon variant="outline" color="gray" onClick={openGhRepoInBrowser}>
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
