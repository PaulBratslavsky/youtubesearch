import React, { useState } from "react";
import { Stack } from "@strapi/design-system";
import { TextInput } from "@strapi/design-system/TextInput";
import { Button } from "@strapi/design-system/Button";

export default function ApiConfig({ onClick }) {
  const [apiKey, setApiKey] = useState("");

  return (
    <Stack padding={3} size={2}>
      <TextInput
        placeholder="Enter API key"
        type="password"
        label="API Key"
        name="apikey"
        onChange={(e) => setApiKey(e.target.value)}
        value={apiKey}
      />

      <Button onClick={onClick} fullWidth>
        Save Key
      </Button>
      
    </Stack>
  );
}
