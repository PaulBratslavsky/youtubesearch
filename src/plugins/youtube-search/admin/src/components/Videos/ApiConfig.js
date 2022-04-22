import React, { useState } from "react";
import { Stack } from "@strapi/design-system";
import { TextInput } from "@strapi/design-system/TextInput";
import { Button } from "@strapi/design-system/Button";
import axiosInstance from "../../utils/axiosInstance";

export default function ApiConfig({ refetchAPIKey }) {
  const [data, setData] = useState("");

  async function addApiKey() {

    if (data.length > 0) {

      const response = await axiosInstance.put(
        `/content-manager/single-types/plugin::youtube-search.config`,
        { apiKey: data }
      );

      console.log(response);
  
      refetchAPIKey();
    }
    
   
  };


  return (
    <Stack padding={3} spacing={2}>
      <TextInput
        placeholder="Enter API key"
        type="text"
        label="API Key"
        name="apikey"
        onChange={(e) => setData(e.target.value)}
        value={data}
      />

      <Button onClick={addApiKey} fullWidth>
        Save Key
      </Button>
    </Stack>
  );
}
