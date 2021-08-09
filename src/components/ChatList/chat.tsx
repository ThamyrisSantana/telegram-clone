import "./styles";

export interface Props {
  name: string;
  message?: string;
  hour?: string;
  img?: string;
}

const Chat: React.FC<Props> = ({ name, message, img, hour }) => {
  return (
    <div className="chat">
      <div className="img">{img}</div>
      <div className="infos">
        <div>
          <h1>{name}</h1>
          <p>{hour}</p>
        </div>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default Chat;
