import React from "react";

import { Container } from "./styles";

import { HiDotsVertical, HiPhone, HiSearch } from "react-icons/hi";

const ChannelData: React.FC = () => {
  return (
    <Container>
      <div className="userInfo">
        <h1>Gustavo</h1>
        <p>Last seen 4 minutes ago</p>
      </div>
      <div className="icons">
        <HiSearch className="item" />
        <HiPhone className="item" />
        <HiDotsVertical className="item" />
      </div>
    </Container>
  );
};

export default ChannelData;
