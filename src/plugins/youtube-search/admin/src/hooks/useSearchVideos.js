import { useEffect, useState } from "react";
import axios from "axios";

export default function useSearchVideos({ apiKey }) {
  const [videos, setVideos] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [requestCount, setRequestCount] = useState(0);
  const [loading, setLoading] = useState(false);

  const db = axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
  });

  async function getVideos(ourRequest) {
    setLoading(true);
    const response = await db.get(
      "/search",
      {
        params: {
          part: "snippet",
          maxResults: 5,
          key: apiKey,
          q: searchTerm,
        },
      },
      {
        cancelToken: ourRequest.current,
      }
    );

    setVideos(response.data.items);
    setLoading(false);
  }

  useEffect(() => {
    // Delay the request to avoid spamming the API
    const delay = setTimeout(() => {
      setRequestCount((prevCount) => prevCount + 1);
    }, 700);
    return () => clearTimeout(delay);
  }, [searchTerm]);

  useEffect(() => {
    if (searchTerm.length === 0) return null
    if (requestCount > 0) {
      const ourRequest = axios.CancelToken.source();
      getVideos(ourRequest);
      return () => ourRequest.cancel();
    }
  }, [requestCount]);

  return {
    loading,
    videos,
    searchTerm,
    setSearchTerm,
  };
}
