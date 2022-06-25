import ChannelButton from '../ChannelButton';
import { Container, Category, AddCategoryIcon } from './styles'

const ChannelList = (): JSX.Element => {
  return (
    <Container>
      <Category>
        <span>Canais de texto</span>
        <AddCategoryIcon />
      </Category>
      <ChannelButton channelName="chat-livre"/>
      <ChannelButton channelName="trabalho"/>
      <ChannelButton channelName="csgo"/>
      <ChannelButton channelName="valorant"/>
      <ChannelButton channelName="minecraft"/>
    </Container>
  );
};

export default ChannelList;
