package config

import (
	"encoding/json"
	"errors"
	"io/ioutil"
	"os"

	"github.com/adrg/xdg"
)

func check(e error) {
	if e != nil {
		panic(e)
	}
}

type userPreferences struct {
	Theme  string `json:"theme"`
	ApiKey string `json:"apiKey"`
}

func (u *userPreferences) SetTheme(theme string) {
	u.Theme = theme
}

func (u *userPreferences) setApiKey(key string) {
	u.ApiKey = key
}

type Config struct {
	osPath string
	userPreferences
}

func Default() *Config {
	configPath := xdg.ConfigHome + "/wallyconfig"
	cfg := &Config{
		osPath: configPath,
		userPreferences: userPreferences{
			Theme: "dark",
		},
	}
	return cfg
}

func (c *Config) loadConfig() string {
	data, err := ioutil.ReadFile(c.osPath)
	if errors.Is(err, os.ErrNotExist) {
		_, err := os.Create(c.osPath)
		check(err)
		data, err = ioutil.ReadFile(c.osPath)
	}

	return string(data)
}

func (c *Config) Load() {
	cfgData := c.loadConfig()
	json.Unmarshal([]byte(cfgData), &c.userPreferences)
}

func (c *Config) save() {
	cfgData, err := json.Marshal(c.userPreferences)
	check(err)

	err = ioutil.WriteFile(c.osPath, cfgData, 0644)
	check(err)
}

func (c *Config) SaveApiKey(apiKey string) {
	c.userPreferences.setApiKey(apiKey)
	c.save()
}

func (c *Config) SaveTheme(theme string) {
	c.userPreferences.SetTheme(theme)
	c.save()
}
