import React from "react";

import { Container, MessageContainer, MessageContainerMe } from "./styles";
// import { HiOutlineCheck } from "react-icons/hi";
import { BsCheckAll } from "react-icons/bs";

const Message: React.FC = () => {
  return (
    <>
      <Container>
        <MessageContainerMe>
          <h1>Vou testar aqui e te aviso</h1>
          <div>
            <p>12:19</p>
            <BsCheckAll className="check" />
          </div>
        </MessageContainerMe>
        <MessageContainer>
          <h1>Se precisar de ajuda me chama</h1>
          <div>
            <p>12:19</p>
          </div>
        </MessageContainer>
      </Container>
    </>
  );
};

export default Message;
