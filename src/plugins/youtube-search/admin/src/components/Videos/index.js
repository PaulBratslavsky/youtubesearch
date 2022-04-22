import React, { useState, useEffect } from "react";
import { Box, Typography, Stack, Flex, Icon } from "@strapi/design-system";
import ApiConfig from "./ApiConfig";
import VideoSearch from "./VideoSearch";

const hasApi = false;

export default function Videos() {
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

      { hasApi ? <VideoSearch /> : <ApiConfig /> }
    </Box>
  );
}
