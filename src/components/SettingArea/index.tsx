import React from "react";

import { Container } from "./styles";
import {
  HiMenu,
  HiOutlineChatAlt2,
  HiFolder,
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
      </button>
      <button>
        <HiFolder />
      </button>
      <button>
        <HiFolder />
      </button>
      <button>
        <HiOutlineAdjustments />
      </button>
    </Container>
  );
};

export default SettingArea;
