import { User, Avatar, Name, BotTag } from "./styles";

interface UserRowProps {
  nickName: string
  isBot?: boolean
  isOnline: boolean
}

const UserRow = ({ nickName, isBot, isOnline }: UserRowProps): JSX.Element => {
  return (
    <User isOnline={isOnline}>
      <Avatar className={isBot ? 'bot' : ''}/>
      <Name>{nickName}</Name>
      {isBot && <BotTag>Bot</BotTag>}
    </User>
  );
};

export default UserRow;
