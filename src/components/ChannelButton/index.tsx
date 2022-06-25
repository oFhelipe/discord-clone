import { Container, Title, HashtagIcon, InviteIcon, GroupContainer, SettingsIcon } from './styles'

interface ChannelButtonProps {
  channelName: string
  selected?: boolean
}

const ChannelButton = ({ channelName, selected }:ChannelButtonProps): JSX.Element => {
  return (
    <Container className={selected ? 'active': ''}>
      <GroupContainer>
        <HashtagIcon />
        <Title>{channelName}</Title>
      </GroupContainer>

      <GroupContainer>
        <InviteIcon />
        <SettingsIcon />
      </GroupContainer>
    </Container>
  );
};

export default ChannelButton;
