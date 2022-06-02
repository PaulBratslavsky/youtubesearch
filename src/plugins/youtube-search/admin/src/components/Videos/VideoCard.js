import React from "react";
import styled from "styled-components";

const VideoContainerDiv = styled.div`
  position: relative;
  background: orange;
  height: 100%;

`;

const IframeContainer = styled.iframe`
  width: 100%;
  height: 100%;
  border: none;
`;

function VideoCard({ videoId, controls, autoplay }) {
  console.log(videoId, "ASDASDFASDFASD");
  return (
    <div>
      <VideoContainerDiv>
        <IframeContainer
          src={`https://www.youtube.com/embed/${videoId}?playlist=${videoId}&loop=1?rel=0&amp;controls=${controls ? 1 : 0}&amp;showinfo=0&autoplay=${autoplay ? 1 : 0}`}
          frameborder="0"
          allow="autoplay; encrypted-media"
          allowfullscreen
        ></IframeContainer>
      </VideoContainerDiv>
    </div>
  );
}

export default VideoCard;