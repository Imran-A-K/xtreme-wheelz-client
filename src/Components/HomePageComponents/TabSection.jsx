
import { TabPanel, useTabs } from "react-headless-tabs";
import { TabSelector } from "./TabComponent/TabSelector";
import TabPanelData from "./TabComponent/TabPanelData/TabPanelData";

const TabSection = () => {
    const [selectedTab, setSelectedTab] = useTabs([
        "remote-cars",
        "generic",
        "replicas",
        
      ]);
    
  return (
    <div className="md:px-20">
              <h2 className="text-center font-semibold text-2xl sm:text-4xl pb-5">Shop by Category</h2>
      <nav className="flex justify-center border-b border-gray-300">
        <TabSelector
          isActive={selectedTab === "remote-cars"}
          onClick={() => setSelectedTab("remote-cars")}
        >
          Remote Cars
        </TabSelector>
        <TabSelector
          isActive={selectedTab === "generic"}
          onClick={() => setSelectedTab("generic")}
        >
          Generic Cars
        </TabSelector>
        <TabSelector
          isActive={selectedTab === "replicas"}
          onClick={() => setSelectedTab("replicas")}
        >
          Replica
        </TabSelector>
        
      </nav>
      <div className="md:p-4">
        <TabPanel hidden={selectedTab !== "remote-cars"}>
          <TabPanelData subCategory={"Remote-Control-Cars"}></TabPanelData>
        </TabPanel>
        <TabPanel hidden={selectedTab !== "generic"}>
          <TabPanelData subCategory={"Generic-Cars"}></TabPanelData>
          </TabPanel>
        <TabPanel hidden={selectedTab !== "replicas"}>
          <TabPanelData subCategory={"Replicas"}></TabPanelData></TabPanel>
        
      </div>
    </div>
  )
}

export default TabSection