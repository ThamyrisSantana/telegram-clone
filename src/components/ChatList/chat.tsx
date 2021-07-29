import React from "react";

import "./styles";

export interface Props {
  name: string;
  message: string;
}

const Chat: React.FC<Props> = ({ name, message }) => {
  return (
    <div className="chat">
      <div className="img"></div>
      <div className="infos">
        <h1>{name}</h1>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default Chat;
