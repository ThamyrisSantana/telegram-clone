import React from "react";

import { Container } from "./styles";
import {
  HiMenu,
  HiOutlineChatAlt2,
  HiOutlineFolder,
  HiOutlineAdjustments,
} from "react-icons/hi";

export const SettingArea: React.FC = () => {
  return (
    <Container>
      <button>
        <HiMenu className="menu" />
      </button>
      <button className="allChats">
        <HiOutlineChatAlt2 className="chatIcon" />
        <p>All chats</p>
      </button>
      <button>
        <HiOutlineFolder />
        <p>Chats</p>
      </button>
      <button>
        <HiOutlineFolder />
        <p>Ota</p>
      </button>
      <button>
        <HiOutlineAdjustments />
        <p>Edit</p>
      </button>
    </Container>
  );
};

export default SettingArea;
