import { useState, useEffect } from "react";
import axiosInstance from "../utils/axiosInstance";

export default function useConfigData() {
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