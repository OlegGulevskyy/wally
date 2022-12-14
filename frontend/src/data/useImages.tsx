import { useInfiniteQuery } from "@tanstack/react-query";
import { useMemo } from "react";
import { GetImages } from "../../wailsjs/go/main/App";
import { Image } from "../feat/gallery/types";
import { useSearchQuery } from "../feat/search/state";

type FetchImagesProps = {
  query: string;
  page?: string;
  size: number;
};

export const fetchImages = ({ query, size, page }: FetchImagesProps) => {
  return GetImages({ query: query ?? "", size: size ?? 0, page: page ?? "" });
};

export const useImages = () => {
  const [searchQuery, setSearchQuery] = useSearchQuery();
  const { data, isError, isLoading, refetch, fetchNextPage } = useInfiniteQuery(
    ["images"],
    ({ pageParam }) =>
      fetchImages({ query: searchQuery, size: 0, page: pageParam }),
    {
      enabled: false,
      getNextPageParam: (lastPage) => {
        console.log("lastPage", lastPage);
        return lastPage.next_page;
      },
    }
  );


	const allImages = useMemo(() => {
		return data?.pages.reduce((acc, page) => {
			return [...acc, ...page.photos]
		}, [] as Image[])
	}, [data?.pages])

  return {
    images: data ? data.pages[0].photos : [],
    pages: data ? data.pages : [],
    refetch: refetch,
    hasNextPage: Boolean(data?.pages[0].next_page),
		allImages,
    fetchNextPage,
    isError,
    isLoading,
    searchQuery,
    setSearchQuery,
  };
};
