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

  const updateSettings = (nextSettings: Partial<AppSettings>) => {
    setAppSettings((current) => ({ ...current, ...nextSettings }));
  };

  const saveApiKey = () => SetApiKey(appSettings.apiKey ?? "");
  const saveTheme = (theme: "dark" | "light") => SetTheme(theme);

  const updateTheme = (theme: "dark" | "light") => {
    const nextvalue = theme ?? appSettings.theme === "dark" ? "light" : "dark";

    updateSettings({
      theme: nextvalue,
    });
    saveTheme(nextvalue);
  };

  const updateApiKey = (apiKey: string) => {
    updateSettings({ apiKey });
  };

  const toggleAppSettings = (value?: boolean) => {
    setAppSettings((current) => ({
      ...current,
      isOpen: value ?? !current.isOpen,
    }));
  };

  return {
    appSettings,
    setAppSettings,
    isOpen: appSettings.isOpen,
    toggleAppSettings,
    theme: appSettings.theme,
    updateTheme,
    saveTheme,
    apiKey: appSettings.apiKey,
    updateApiKey,
    saveApiKey,
  };
};
