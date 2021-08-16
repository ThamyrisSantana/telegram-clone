import React, { useState } from "react";

import { Container, MessageContainer } from "./styles";
import { InputContainer } from "../ChatInput/styles";

import MessageMe from "../Message/index";

import { HiOutlineEmojiHappy } from "react-icons/hi";
import { AiOutlinePaperClip } from "react-icons/ai";
import { BiMicrophone } from "react-icons/bi";
import { RiSendPlaneFill } from "react-icons/ri";
import Message from "../Message/Message";

interface MessageType {
  value: string;
}

const ChannalData: React.FC = () => {
  const [iconToggle, setIconToggle] = useState(false);
  const [messages, setmessages] = useState<MessageType[]>([]);
  const [text, setText] = useState("");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value) {
      setIconToggle(true);
    } else {
      setIconToggle(false);
    }

    setText(e.target.value);
  };

  const addMessage = () => {
    const newArray = [...messages, { value: text, id: messages.length }];

    setmessages(newArray);
    setText("");
  };

  const onKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      addMessage();
    }
  };

  return (
    <Container>
      <MessageContainer>
        <Message />
        {messages.map((message, index) => (
          <div key={index}>
            <MessageMe message={message.value} />
          </div>
        ))}
      </MessageContainer>
      <InputContainer>
        <button>
          <AiOutlinePaperClip />
        </button>
        <input
          value={text}
          onKeyPress={onKeyPress}
          className="input"
          onChange={onChange}
          type="text"
          placeholder="Write a message..."
        />
        <div className="emojiSection">
          {iconToggle ? (
            <>
              <button>
                <HiOutlineEmojiHappy />
              </button>
              <button>
                <RiSendPlaneFill onClick={addMessage} className="sendMessage" />
              </button>
              /
            </>
          ) : (
            <>
              <button>
                <HiOutlineEmojiHappy />
              </button>
              <button>
                <BiMicrophone />
              </button>
            </>
          )}
        </div>
      </InputContainer>
    </Container>
  );
};

export default ChannalData;
