import { atom, useAtom } from "jotai";
import { useEffect } from "react";
import {
  GetApiKey,
  GetTheme,
  SetApiKey,
  SetTheme,
} from "../../../wailsjs/go/main/App";
import { AppSettings } from "./types";

export const settingsAtom = atom<AppSettings>({
  isOpen: false,
  theme: "dark",
  apiKey: null,
});

export const useAppSettings = () => useAtom(settingsAtom);

export const useApp = () => {
  const [appSettings, setAppSettings] = useAppSettings();

  const getSettingsFromBackend = async () => {
    const theme = await GetTheme();
    const key = await GetApiKey();

    setAppSettings({
      ...appSettings,
      theme: theme as "dark" | "light",
      apiKey: key,
    });
  };

  useEffect(() => {
    getSettingsFromBackend();
  }, []);

  const updateSettings = (settings: Partial<AppSettings>) => {
    setAppSettings({
      ...appSettings,
      ...settings,
    });
  };

  const updateTheme = (theme: "dark" | "light") => {
    updateSettings({ theme });
  };

  const updateApiKey = (apiKey: string) => {
    updateSettings({ apiKey });
  };

  const saveApiKey = () => SetApiKey(appSettings.apiKey ?? "");
  const saveTheme = () => SetTheme(appSettings.theme);

  const toggleAppSettings = (value?: boolean) => {
    setAppSettings((current) => ({
      ...current,
      isOpen: value ?? !current.isOpen,
    }));
  };

  return {
    appSettings,
    setAppSettings,
    toggleAppSettings,
    theme: appSettings.theme,
    updateTheme,
    saveTheme,
    apiKey: appSettings.apiKey,
    updateApiKey,
    saveApiKey,
  };
};
