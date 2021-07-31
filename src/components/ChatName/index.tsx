import React from "react";

import { Container } from "./styles";

import { HiDotsVertical, HiPhone, HiSearch } from "react-icons/hi";
import { BiLeftArrowAlt } from "react-icons/bi";

const ChannelData: React.FC = () => {
  return (
    <Container>
      <div>
        <BiLeftArrowAlt className="arrow" />
        <div className="userInfo">
          <h1>Gustavo</h1>
          <p>Last seen 4 minutes ago</p>
        </div>
      </div>
      <div className=" icons">
        <HiSearch className="item search" />
        <HiPhone className="item call" />
        <HiDotsVertical className="item dots" />
      </div>
    </Container>
  );
};

export default ChannelData;
