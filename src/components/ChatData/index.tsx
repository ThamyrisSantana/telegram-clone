import React from "react";

import { Container, MessageContainer } from "./styles";

import Message from "../Message/index";
import InputContainer from "../ChatInput";

const ChannalData: React.FC = () => {
  return (
    <Container>
      <MessageContainer>
        <Message />
      </MessageContainer>
      <InputContainer />
    </Container>
  );
};

export default ChannalData;
