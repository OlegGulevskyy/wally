package main

import (
	"fmt"

	"github.com/reujab/wallpaper"
)

func (app *App) SetWallpaper(url string) {
	setWallpaperFromUrl(url)
}

func setWallpaperFromUrl(url string) {
	// Set the desktop wallpaper to the image at the given URL
	err := wallpaper.SetFromURL(url)
	if err != nil {
		fmt.Println("Error setting wallpaper: ", err)
		panic(err) }
}
