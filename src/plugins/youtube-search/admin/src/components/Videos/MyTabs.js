import React from "react";
import {
  Tabs,
  Tab,
  TabGroup,
  TabPanels,
  TabPanel,
} from "@strapi/design-system/Tabs";
import { Box } from "@strapi/design-system/Box";

export default function MyTabs({ children }) {
  return (
    <Box padding={1}>
      <TabGroup
        label="Some stuff for the label"
        id="tabs"
        onTabChange={(selected) => console.log(selected)}
      >
        <Tabs>
          <Tab>Search</Tab>
          <Tab>My Videos</Tab>
        </Tabs>
        <TabPanels>
          <TabPanel>
            <Box color="neutral800" padding={4} background="neutral0">
              {children[0]}
            </Box>
          </TabPanel>
          <TabPanel>
            <Box color="neutral800" padding={4} background="neutral0">
              {children[1]}
            </Box>
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </Box>
  );
}
