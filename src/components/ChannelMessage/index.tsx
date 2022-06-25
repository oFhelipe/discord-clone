import {
  Container,
  Avatar,
  Message,
  Header,
  Name,
  BotTag,
  Time,
  Content,
} from "./styles";

export interface ChannelMessageProps {
  author: string;
  date: string;
  content: string | React.ReactElement | React.ReactNode;
  hasMention?: boolean;
  isBot?: boolean;
}

const ChannelMessage = ({
  author,
  content,
  date,
  hasMention,
  isBot,
}: ChannelMessageProps): JSX.Element => {
  return (
    <Container className={hasMention ? "mention" : '""'}>
      <Avatar className={isBot ? "bot" : ""} />
      <Message>
        <Header>
          <Name>{author}</Name>
          {isBot && <BotTag>Bot</BotTag>}
          <Time>{date}</Time>
        </Header>
        <Content>{content}</Content>
      </Message>
    </Container>
  );
};

export default ChannelMessage;
