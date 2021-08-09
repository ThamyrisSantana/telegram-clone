import React from "react";
import { MessageContainer } from "./styles";

const Message: React.FC = () => {
  return (
    <>
      <MessageContainer>
        <h1>Se precisar de ajuda me chama</h1>
        <div>
          <p>12:19</p>
        </div>
      </MessageContainer>
    </>
  );
};

export default Message;
