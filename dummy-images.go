package main

func getDummyResponse() QueryResponse {
	dummyPhoto := Image{
		Id:              "1",
		Url:             "https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
		Photographer:    "Pixabay",
		PhotographerUrl: "https://pixabay.com/users/pixabay-2092653/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=248797",
		Width:           1260,
		Height:          750,
		Src: ImageSrc{
			Original:  "https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg",
			Large2x:   "https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
			Medium:    "https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350",
			Small:     "https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=130",
			Portrait:  "https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&dpr=2&fit=crop&h=1200&w=800",
			Landscape: "https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&dpr=2&fit=crop&h=627&w=1200",
		},
	}

	dummyPhotos := []Image{}
	for i := 0; i < 16; i++ {
		dummyPhotos = append(dummyPhotos, dummyPhoto)
	}

	dummyRes := QueryResponse{
		Photos: dummyPhotos,
	}
	return dummyRes
}
