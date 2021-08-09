import { Container } from "./styles";

import Chat from "./chat";

const ChannelList: React.FC = () => {
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

export default ChannelList;
