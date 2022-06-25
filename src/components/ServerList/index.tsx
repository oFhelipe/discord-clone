import ServerButton from "../ServerButton";
import { Container, Separator } from "./styles";


const ServerList = (): JSX.Element => {
  return (
    <Container>
      <ServerButton isHome />

      <Separator />

      <ServerButton />
      <ServerButton  hasNotifications />
      <ServerButton  mentions={3} />
      <ServerButton />
      <ServerButton />
      <ServerButton />
      <ServerButton mentions={178}/>
      <ServerButton />
      <ServerButton />
      <ServerButton hasNotifications/>
      <ServerButton />
      <ServerButton />
    </Container>
  );
};

export default ServerList;
