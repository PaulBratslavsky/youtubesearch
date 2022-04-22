import React from "react";
import { Box, Typography, Stack, Flex, Icon } from "@strapi/design-system";
import ApiConfig from "./ApiConfig";
import VideoSearch from "./VideoSearch";
import useConfigData from '../../hooks/useConfigData';

export default function Videos() {

  const { status, apiKey, refetchAPIKey } = useConfigData();

  // TODO: handle status

  return (
    <Box
      as="aside"
      aria-labelledby="video-search-title"
      background="neutral0"
      borderColor="neutral150"
      hasRadius
      padding={4}
      shadow="tableShadow"
    >
      <Typography
        varient="sigma"
        textColor="neutral600"
        id="video-search-title"
      >
        Video Search
      </Typography>

      {apiKey ? <VideoSearch apiKey={apiKey} /> : <ApiConfig refetchAPIKey={refetchAPIKey} />}
    </Box>
  );
}
