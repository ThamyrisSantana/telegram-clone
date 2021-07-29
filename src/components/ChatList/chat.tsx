import React from "react";

import "./styles";

export interface Props {
  name: string;
  message: string;
  img?: string;
}

const Chat: React.FC<Props> = ({ name, message, img }) => {
  return (
    <div className="chat">
      <div className="img">{img}</div>
      <div className="infos">
        <h1>{name}</h1>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default Chat;
