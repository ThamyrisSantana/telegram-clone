import React, { useState } from "react";
// import $ from "jquery";

import { Container } from "./styles";
import { HiOutlineEmojiHappy } from "react-icons/hi";
import { AiOutlinePaperClip } from "react-icons/ai";
import { BiMicrophone } from "react-icons/bi";
import { RiSendPlane2Fill } from "react-icons/ri";

const ChatInput: React.FC = () => {
  const [iconToggle, setIconToggle] = useState(false);
  function onChange() {
    // if ($(".input").val()) {
    //   setIconToggle(true);
    // } else {
    //   setIconToggle(false);
    // }
  }

  console.log(setIconToggle);

  return (
    <Container>
      <button>
        <AiOutlinePaperClip />
      </button>
      <input
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
              <RiSendPlane2Fill className="sendMessage" />
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
    </Container>
  );
};

export default ChatInput;
