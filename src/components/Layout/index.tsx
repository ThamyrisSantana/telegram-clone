// import React, { useEffect, useState } from "react";

import { Grid } from "./styles";
import SettingArea from "../SettingArea/index";
import SearchChats from "../SearchChats/index";
import ChannelList from "../ChatList/index";
import ChannelName from "../ChatName/index";
import ChannalData from "../ChatData/index";

const Layout: React.FC = () => {
  // const [chatData, setChatData] = useState([]);

  // useEffect(() => {
  //   async function loadData() {
  //     const api = await fetch("http://localhost:3000/chats");
  //     const result = await api.json();
  //     console.log(result);
  //     setChatData(result);
  //   }

  //   loadData();
  // }, []);

  // console.log(chatData);

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
