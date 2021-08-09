import React from "react";

import { Container, MessageContainerMe } from "./styles";
// import { HiOutlineCheck } from "react-icons/hi";
import { BsCheckAll } from "react-icons/bs";

export interface Props {
  message: string;
}

const Message = ({ message }: Props): JSX.Element => {
  return (
    <>
      <Container>
        <MessageContainerMe>
          <h1>{message}</h1>
          <div>
            <p>12:19</p>
            <BsCheckAll className="check" />
          </div>
        </MessageContainerMe>
      </Container>
    </>
  );
};

export default Message;
