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
      <button>
        <HiOutlineChatAlt2 />
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
