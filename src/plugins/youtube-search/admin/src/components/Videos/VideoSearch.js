import React from "react";
import { Stack } from "@strapi/design-system";
import useSearchVideos from "../../hooks/useSearchVideos";
import { Searchbar, SearchForm } from "@strapi/design-system/Searchbar";
import { Loader } from "@strapi/design-system/Loader";
import VideoList from './VideoList';

export default function VideoSearch({ apiKey }) {
  const { loading, videos, searchTerm, setSearchTerm } =
    useSearchVideos(apiKey);
  return (
    <>
      <Stack padding={4} spacing={2}>
        <SearchForm
          style={{ border: "1px solid #dcdce4", borderRadius: "4px" }}
        >
          <Searchbar
            name="searchbar"
            onClear={() => setSearchTerm("")}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            clearLabel="Clearing the plugin search"
            placeholder="Search YouTube"
          >
            Searching for a plugin
          </Searchbar>
        </SearchForm>
      </Stack>
      
      <Stack padding={4} spacing={2}>
        {loading ? <Loader small>Loading content...</Loader> : <VideoList videos={videos} />}
      </Stack>
    </>
  );
}
