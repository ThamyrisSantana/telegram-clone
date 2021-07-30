import React, { useEffect, useState } from "react";

import { Container } from "./styles";

import Chat from "./chat";

const ChannelList: React.FC = () => {
  const [chatData, setChatData] = useState([]);

  useEffect(() => {
    async function loadData() {
      const api = await fetch("http://localhost:3000/chats");
      const result = await api.json();
      console.log(result);
      setChatData(result);
    }

    loadData();
  }, []);

  console.log(chatData);

  return (
    <Container>
      <Chat
        hour="12:19"
        name="Gustavo"
        message="Se precisar de ajuda me chama"
      />
      <Chat
        hour="14:50"
        name="Fernanda"
        message="Dá uma olhada nessa aula que te mandei"
      />
      <Chat hour="8:20" name="Paula" message="Finalizou o projeto?" />
      <Chat
        hour="12:19"
        name="Gustavo"
        message="Se precisar de ajuda me chama"
      />
      <Chat
        hour="14:50"
        name="Fernanda"
        message="Dá uma olhada nessa aula que te mandei"
      />
      <Chat hour="8:20" name="Paula" message="Finalizou o projeto?" />
      <Chat
        hour="12:19"
        name="Gustavo"
        message="Se precisar de ajuda me chama"
      />
      <Chat
        hour="14:50"
        name="Fernanda"
        message="Dá uma olhada nessa aula que te mandei"
      />
      <Chat hour="8:20" name="Paula" message="Finalizou o projeto?" />
      <Chat
        hour="12:19"
        name="Gustavo"
        message="Se precisar de ajuda me chama"
      />
      <Chat
        hour="14:50"
        name="Fernanda"
        message="Dá uma olhada nessa aula que te mandei"
      />
      <Chat hour="8:20" name="Paula" message="Finalizou o projeto?" />
    </Container>
  );
};

//{chatData.map((data) => {
//  <Chat name={data.name} message="" hour="" key={data.id} />;
//})}

export default ChannelList;
