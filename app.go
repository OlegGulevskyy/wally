package main

import (
	"context"
	"fmt"
)

// App struct
type App struct {
	ctx context.Context
}

// NewApp creates a new App application struct
func NewApp() *App {
	return &App{}
}

// startup is called when the app starts. The context is saved
// so we can call the runtime methods
func (a *App) startup(ctx context.Context) {
	a.ctx = ctx
}

// Greet returns a greeting for the given name
func (a *App) Greet(name string) string {
	return fmt.Sprintf("Hello %s, It's show time!", name)
}

type QueryOptions struct {
	// keywords to use during search
	Query string
	Size  int
}

type ImageSrc struct {
	Original  string `json:"original"`
	Large2x   string `json:"large2x"`
	Medium    string `json:"medium"`
	Small     string `json:"small"`
	Portrait  string `json:"portrait"`
	Landscape string `json:"landscape"`
	Tiny      string `json:"tiny"`
}

type Image struct {
	Id              string `json:"id"`
	Url             string `json:"url"`
	Photographer    string `json:"photographer"`
	PhotographerUrl string `json:"photographer_url"`
	Width           int    `json:"width"`
	Height          int    `json:"height"`
	Src             ImageSrc
	Alt             string `json:"alt"`
}

type QueryResponse struct {
	Data []Image
}

func (a *App) GetImages(opts QueryOptions) QueryResponse {
	imgs := []Image{}
	for i := 0; i < 5; i++ {
		dummyImage := Image{
			Id:              "1",
			Url:             "https://www.pexels.com/photo/trees-during-day-3573351/",
			Photographer:    "Pixabay",
			PhotographerUrl: "https://www.pexels.com/@pixabay",
			Width:           6000,
			Height:          4000,
			Src: ImageSrc{
				Original:  "https://images.pexels.com/photos/3573351/pexels-photo-3573351.png",
				Large2x:   "https://images.pexels.com/photos/3573351/pexels-photo-3573351.png?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
				Medium:    "https://images.pexels.com/photos/3573351/pexels-photo-3573351.png?auto=compress&cs=tinysrgb&h=350",
				Small:     "https://images.pexels.com/photos/3573351/pexels-photo-3573351.png?auto=compress&cs=tinysrgb&h=130",
				Portrait:  "https://images.pexels.com/photos/3573351/pexels-photo-3573351.png?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
				Landscape: "https://images.pexels.com/photos/3573351/pexels-photo-3573351.png?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
				Tiny:      "https://images.pexels.com/photos/3573351/pexels-photo-3573351.png?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
			},
			Alt: "white and brown bird on brown wooden branch during daytime",
		}
		imgs = append(imgs, dummyImage)
	}

	res := QueryResponse{Data: imgs}

	return res
}
