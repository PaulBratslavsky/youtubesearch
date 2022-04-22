import React from "react";
import { Stack } from "@strapi/design-system";
import useSearchVideos from "../../hooks/useSearchVideos";
import { TextInput } from "@strapi/design-system/TextInput";
import { Loader } from "@strapi/design-system/Loader";

export default function VideoSearch({ apiKey }) {
  const { loading, videos, searchTerm, setSearchTerm } =
    useSearchVideos(apiKey);

  console.log(videos, "videos");

  return (
    <>
      <Stack padding={3} spacing={2}>
        <TextInput
          placeholder="Search"
          label="Search Videos"
          name="search"
          onChange={(e) => setSearchTerm(e.target.value)}
          value={searchTerm}
        />
      </Stack>
      <Stack padding={3} spacing={2}>
        {loading ? <Loader small>Loading content...</Loader> : <h2>videos</h2>}
      </Stack>
    </>
  );
}
