import React from "react";

import { Container } from "./styles";

export interface Props {
  name: string;
  message: string;
}

const ChannelList: React.FC<Props> = ({ name, message }) => {
  return (
    <Container>
      <div className="chat">
        <div className="img"></div>
        <div className="infos">
          <h1>{name}</h1>
          <p>{message}</p>
        </div>
      </div>
    </Container>
  );
};

export default ChannelList;
