import React from "react";

import { Grid } from "./styles";
import SettingArea from "../SettingArea/index";
import SearchChats from "../SearchChats/index";
import ChannelList from "../ChannelList";
import ChannelName from "../ChannelName";

const Layout: React.FC = () => {
  return (
    <Grid>
      <SettingArea />
      <SearchChats />
      <ChannelList />
      <ChannelList />
      <ChannelList />
      <ChannelList />
      <ChannelName />
    </Grid>
  );
};

export default Layout;
