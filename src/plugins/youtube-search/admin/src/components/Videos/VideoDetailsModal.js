import React from "react";
import {
  ModalLayout,
  ModalBody,
  ModalHeader,
  ModalFooter,
} from "@strapi/design-system/ModalLayout";

import { Typography } from "@strapi/design-system/Typography";
import { Button } from "@strapi/design-system/Button";
import VideoCard from "./VideoCard";

export default function VideoDetailsModal({ data, setShowModal }) {
  console.log(data);

  const { snippet, id } = data;
  console.log(id, "id");

  return (
    <ModalLayout
      onClose={() => setShowModal((prev) => !prev)}
      labelledBy="title"
    >
      <ModalHeader>
        <Typography fontWeight="bold" textColor="neutral800" as="h2" id="title">
          {snippet.title}
        </Typography>
      </ModalHeader>
      <ModalBody>
        {snippet.channelTitle}

        {snippet.publishedAt}
        {/* <img src={snippet.thumbnails.high.url} alt={snippet.title} /> */}
        <VideoCard controls videoId={id.videoId} />
        <Typography textColor="neutral600" as="p">
          {snippet.description}
        </Typography>
      </ModalBody>
      <ModalFooter
        startActions={
          <Button
            onClick={() => setShowModal((prev) => !prev)}
            variant="tertiary"
          >
            Cancel
          </Button>
        }
        endActions={
          <>
            <Button onClick={() => alert("save video")}>Save Video</Button>
          </>
        }
      />
    </ModalLayout>
  );
}
