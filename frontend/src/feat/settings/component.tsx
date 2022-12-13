import { useEffect, useState } from "react";
import { Button, PasswordInput, Space } from "@mantine/core";
import { SetApiKey, GetApiKey } from "../../../wailsjs/go/main/App";
import { showNotification } from "@mantine/notifications";

export const Settings = () => {
  const [apiKeyInput, setApiKeyInput] = useState("");

  const handleSetApiKey = () => {
    SetApiKey(apiKeyInput);
    showNotification({
      title: "API Key Set",
      message: "Your API key has been set",
      color: "teal",
      autoClose: 5000,
    });
  };

  useEffect(() => {
    GetApiKey().then((key) => setApiKeyInput(key));
  }, []);

  return (
    <>
      <PasswordInput
        placeholder="API key"
        label="API Keys"
        description="API key from pexels.com to retrieve images"
        value={apiKeyInput}
        onChange={(e) => setApiKeyInput(e.target.value)}
        withAsterisk
      />
      <Space h="md" />
      <Button onClick={handleSetApiKey}>Update API key</Button>
    </>
  );
};
