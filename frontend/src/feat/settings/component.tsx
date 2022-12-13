import { Button, PasswordInput, Space } from "@mantine/core";
import { showNotification } from "@mantine/notifications";
import { useApp } from "./state";

export const Settings = () => {
  const { apiKey, updateApiKey, saveApiKey } = useApp();

  const handleSetApiKey = () => {
    saveApiKey();
    showNotification({
      title: "API Key Set",
      message: "Your API key has been set",
      color: "teal",
      autoClose: 5000,
    });
  };

  return (
    <>
      <PasswordInput
        placeholder="API key"
        label="API Keys"
        description="API key from pexels.com to retrieve images"
        value={apiKey ?? ""}
        onChange={(e) => updateApiKey(e.target.value)}
        withAsterisk
      />
      <Space h="md" />
      <Button onClick={handleSetApiKey}>Update API key</Button>
    </>
  );
};
