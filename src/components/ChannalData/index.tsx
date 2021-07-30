import React from "react";

import { Container, MessageContainer, InputContainer } from "./styles";
import { HiOutlineEmojiHappy } from "react-icons/hi";
import { AiOutlinePaperClip } from "react-icons/ai";
import { BiMicrophone } from "react-icons/bi";
import Message from "../Message/index";

const ChannalData: React.FC = () => {
  return (
    <Container>
      <MessageContainer>
        <Message />
      </MessageContainer>
      <InputContainer>
        <button>
          <AiOutlinePaperClip />
        </button>
        <input type="text" placeholder="Write a message..." />
        <div className="emojiSection">
          <button>
            <HiOutlineEmojiHappy />
          </button>
          <button>
            <BiMicrophone />
          </button>
        </div>
      </InputContainer>
    </Container>
  );
};

export default ChannalData;
