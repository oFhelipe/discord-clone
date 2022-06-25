import { Container, Profile, Avatar, UserData, Icons, MicIcon, HeadPhoneIcon, SettingsIcon, Name, Tag } from "./styles";

const UserInfo = (): JSX.Element => {
  return (
    <Container>
      <Profile>
        <Avatar />

        <UserData>
          <Name>oFheN</Name>
          <Tag>#1565</Tag>
        </UserData>
      </Profile>

      <Icons>
        <MicIcon />
        <HeadPhoneIcon />
        <SettingsIcon />
      </Icons>
    </Container>
  );
};

export default UserInfo;
