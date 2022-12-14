package main

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"log"
	"net/http"
)

type QueryOptions struct {
	// keywords to use during search
	Query string `json:"query"`
	Size  int    `json:"size"`
	Page  string `json:"page"`
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

const (
	DEFAULT_PER_PAGE = 80
)

func fullUrl(page string, query string, perPage int) string {
	var url string
	pp := fmt.Sprintf("%d", perPage)
	if page == "" {
		url = "https://api.pexels.com/v1/search?query=" + query + "&per_page=" + pp + "&page=1"
	} else {
		url = page
	}
	return url
}

// handle it more gracefully
func queryImages(query string, apiKey string, page string, res *QueryResponse) error {
	if apiKey == "" {
		return nil
	}

	url := fullUrl(page, query, DEFAULT_PER_PAGE)
	req, err := http.NewRequest("GET", url, nil)
	if err != nil {
		log.Fatal(err)
	}

	req.Header.Set("Authorization", apiKey)
	client := &http.Client{}
	resp, err := client.Do(req)
	if err != nil {
		log.Fatal(err)
	}
	defer resp.Body.Close()
	body, _ := ioutil.ReadAll(resp.Body)
	return json.Unmarshal(body, &res)
}

func (a *App) GetImages(opts QueryOptions) QueryResponse {
	res := QueryResponse{}
	queryImages(opts.Query, a.GetApiKey(), opts.Page, &res)
	return res
	// return getDummyResponse()
}
