import React, { useState } from "react";
import useCopy from "use-copy";
import styled from "styled-components";

const CardWrapper = styled(Card)`
  width: 99%;
  margin-bottom: 2rem;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 8px;
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
  CardAction,
  CardTimer,
  CardContent,
} from "@strapi/design-system/Card";

import { Button } from "@strapi/design-system/Button";

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
  const [showVideo, setShowVideo] = useState(false);
  const [copied, copy, setCopied] = useCopy(`https://www.youtube.com/watch?v=${video.id.videoId}`);

  const copyText = () => {
    copy();
 
    setTimeout(() => {
      setCopied(false);
    }, 3000);
  };
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
          <React.Fragment>
            <CardAssetImg src={thumbnails.default.url} alt={title} />{" "}
            <CardTimer>{title}</CardTimer>
          </React.Fragment>
        )}
      </CardHeader>
      <ButtonWrapper>
        <Button>Get Details</Button>
        <Button onClick={copyText}>{copied ? "Copied" : "Copy Link"}</Button>
      </ButtonWrapper>
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
