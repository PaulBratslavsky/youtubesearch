import React from "react";
import { Box, Typography, Stack, Flex, Icon } from "@strapi/design-system";
import ApiConfig from "./ApiConfig";
import VideoSearch from "./VideoSearch";
import useConfigData from "../../hooks/useConfigData";
import MyTabs from "./MyTabs";
import VideoDetailsModal from "./VideoDetailsModal";

export default function Videos() {
  const { status, apiKey, refetchAPIKey } = useConfigData();
  const [showModal, setShowModal] = React.useState(false);
  const [selectedVideo, setSelectedVideo] = React.useState(null);

  function showVideoDetail(data) {
    setShowModal(true);
    setSelectedVideo(data);
  }
  // TODO: handle status

  return (
    <React.Fragment>
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

        <MyTabs>
          {apiKey ? (
            <VideoSearch apiKey={apiKey} showVideoDetail={showVideoDetail} />
          ) : (
            <ApiConfig refetchAPIKey={refetchAPIKey} />
          )}
          <Box>2nd tab</Box>
        </MyTabs>
      </Box>
      {showModal && <VideoDetailsModal data={selectedVideo} setShowModal={setShowModal} />}
    </React.Fragment>
  );
}
