import React, { useState } from "react";
import styled from "styled-components";

const CardWrapper = styled(Card)`
  width: 99%;
  margin-bottom: 2rem;
`;

const CardAssetImg = styled.img`
  margin: 0;
  padding: 0;
  max-height: 100%;
  width: 100%;
  object-fit: cover;
  background: red;
`;

import {
  Card,
  CardHeader,
  CardBody,
  CardCheckbox,
  CardAction,
  CardAsset,
  CardTimer,
  CardContent,
  CardBadge,
  CardTitle,
  CardSubtitle,
} from "@strapi/design-system/Card";

import VideoView from "./VideoView";

import { IconButton } from "@strapi/design-system/IconButton";
import Eye from "@strapi/icons/Eye";

function getYouTubeID(url) {
  const regExp =
    /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
  const match = url.match(regExp);
  return match && match[2].length === 11 ? match[2] : null;
}

function VideoCard({ video }) {
  console.log(video);
  const { thumbnails, title } = video.snippet;
  console.log(thumbnails.default.url, title);
  const [showVideo, setShowVideo] = useState(false);
  return (
    <CardWrapper id="first">
      <CardHeader>
        <CardAction position="end">
          <IconButton
            style={{ zIndex: "100" }}
            label="Show Video"
            icon={<Eye />}
            onClick={() => setShowVideo(!showVideo)}
          />
        </CardAction>
        {showVideo ? (
          <VideoView controls autoplay fullscreen videoId={video.id.videoId} />
        ) : (
          <>
            <CardAssetImg src={thumbnails.default.url} alt={title} />{" "}
            <CardTimer>{title}</CardTimer>
          </>
        )}
      </CardHeader>
      <CardBody>
        <CardContent>
          <CardTitle>{title}</CardTitle>
        </CardContent>
      </CardBody>
    </CardWrapper>
  );
}

export default function VideoList({ videos }) {
  return (
    <div style={{ maxHeight: "600px", overflowY: "scroll" }}>
      {videos.map((video) => (
        <VideoCard key={video.id} video={video} />
      ))}
    </div>
  );
}
