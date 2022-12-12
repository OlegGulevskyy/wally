package main

import (
	"context"
	"encoding/json"
	"fmt"
	"io/ioutil"
	"log"
	"net/http"
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

func queryImages(query string, res *QueryResponse) error {
	key := ""
	url := "https://api.pexels.com/v1/search?query=" + query + "&per_page=15&page=1"
	req, err := http.NewRequest("GET", url, nil)
	if err != nil {
		log.Fatal(err)
	}
	req.Header.Set("Authorization", key)
	client := &http.Client{}
	resp, err := client.Do(req)
	if err != nil {
		log.Fatal(err)
	}
	defer resp.Body.Close()
	body, _ := ioutil.ReadAll(resp.Body)
	return json.Unmarshal(body, &res)
}

type QueryOptions struct {
	// keywords to use during search
	Query string `json:"query"`
	Size  int    `json:"size"`
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
	Id              string   `json:"id"`
	Url             string   `json:"url"`
	Photographer    string   `json:"photographer"`
	PhotographerUrl string   `json:"photographer_url"`
	Width           int      `json:"width"`
	Height          int      `json:"height"`
	Src             ImageSrc `json:"src"`
	Alt             string   `json:"alt"`
}

type QueryResponse struct {
	Data     []Image `json:"data"`
	Photos   []Image `json:"photos"`
	Page     int     `json:"page"`
	PerPage  int     `json:"per_page"`
	NextPage string  `json:"next_page"`
}

func (a *App) GetImages(opts QueryOptions) QueryResponse {
	res := QueryResponse{}
	queryImages(opts.Query, &res)
	return res
}
