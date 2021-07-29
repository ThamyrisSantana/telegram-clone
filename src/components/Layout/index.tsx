import React from "react";

import { Grid } from "./styles";
import SettingArea from "../SettingArea/index";
import SearchChats from "../SearchChats/index";
import ChannelList from "../ChatList";
import ChannelName from "../ChannelName";
import ChannalData from "../ChannalData/index";

const Layout: React.FC = () => {
  return (
    <Grid>
      <SettingArea />
      <SearchChats />
      <ChannelList />
      <ChannelName />
      <ChannalData />
    </Grid>
  );
};

export default Layout;
