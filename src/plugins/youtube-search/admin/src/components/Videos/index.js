import React, { useState, useEffect } from "react";
import { Box, Typography, Stack, Flex, Icon } from "@strapi/design-system";
import ApiConfig from "./ApiConfig";
import VideoSearch from "./VideoSearch";
import axiosInstance from "../../utils/axiosInstance";

function useConfigData() {
  // const { initialData, isSingleType, slug } = useCMEditViewDataManager();

  const [status, setStatus] = useState("loading");
  const [apiKey, setApiKey] = useState(null);

  const refetchAPIKey = async () => {
    try {
      const { data } = await axiosInstance.get(
        `/content-manager/single-types/plugin::youtube-search.config`
      );

      setApiKey(data);
      setStatus("success");
    } catch (error) {
      // TODO: revisit this to make more graceful
      if (error.message === "failed with status code 404") {
        setStatus("notfound");
        setApiKey(null);
      } else {
        setStatus("error");
        setApiKey(null);
      }
    }
  };

  useEffect(() => {
    refetchAPIKey();
  }, []);

  return {
    status,
    apiKey,
    refetchAPIKey,
  };
}

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

      {apiKey ? <VideoSearch /> : <ApiConfig refetchAPIKey={refetchAPIKey} />}
    </Box>
  );
}
