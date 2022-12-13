package main

import (
	"context"
	"fmt"

	"github.com/OlegGulevskyy/wally/pkg/config"
	"github.com/pkg/browser"
)

// App struct
type App struct {
	ctx context.Context
	config *config.Config
}

// NewApp creates a new App application struct
func NewApp() *App {
	return &App{}
}

// startup is called when the app starts. The context is saved
// so we can call the runtime methods
func (a *App) startup(ctx context.Context) {
	a.ctx = ctx
	a.config = config.Default()
	a.config.Load()
}

func (a *App) OpenUrlSystemBrowser(url string) {
	browser.OpenURL(url)
}

func (a *App) SetApiKey(key string) {
	a.config.SaveApiKey(key)
}

func (a *App) GetApiKey() string {
	return a.config.ApiKey
}

func (a *App) SetTheme(theme string) {
	a.config.SaveTheme(theme)
}

func (a *App) GetTheme() string {
	return a.config.Theme
}
