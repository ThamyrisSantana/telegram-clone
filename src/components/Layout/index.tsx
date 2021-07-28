import React from "react";

import { Grid } from "./styles";
import SettingArea from "../SettingArea/index";
import SearchChats from "../SearchChats/index";

const Layout: React.FC = () => {
  return (
    <Grid>
      <SettingArea />
      <SearchChats />
    </Grid>
  );
};

export default Layout;
