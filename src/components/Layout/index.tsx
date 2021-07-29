import React from "react";

import { Grid } from "./styles";
import SettingArea from "../SettingArea/index";
import SearchChats from "../SearchChats/index";
import ChannelList from "../ChannelList";
import ChannelName from "../ChannelName";
import ChannalData from "../ChannalData/index";

const Layout: React.FC = () => {
  return (
    <Grid>
      <SettingArea />
      <SearchChats />
      <ChannelList name="Amor" message="Bora sair?" />
      <ChannelList name="Mãe" message="Filha, ta tudo bem?" />
      <ChannelList name="Lita" message="Olha meu desenho" />
      <ChannelList name="Amor" message="Bora sair?" />
      <ChannelName />
      <ChannalData />
    </Grid>
  );
};

export default Layout;
