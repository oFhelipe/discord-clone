import { Container, Role } from './styles'
import UserRow from './UserRow';

const UserList = (): JSX.Element => {
  return (
    <Container>
      <Role>Disponível - 1</Role>
      <UserRow nickName="oFheN" isOnline/>
      <UserRow nickName="wdf" isBot isOnline />
      
      <Role>Offline - 17</Role>
      <UserRow nickName="oFheN" isOnline={false}/>
      <UserRow nickName="oFheN" isOnline={false}/>
      <UserRow nickName="oFheN" isOnline={false}/>
      <UserRow nickName="oFheN" isOnline={false}/>
      <UserRow nickName="oFheN" isOnline={false}/>
      <UserRow nickName="oFheN" isOnline={false}/>
      <UserRow nickName="oFheN" isOnline={false}/>
      <UserRow nickName="oFheN" isOnline={false}/>
      <UserRow nickName="oFheN" isOnline={false}/>
      <UserRow nickName="oFheN" isOnline={false}/>
      <UserRow nickName="oFheN" isOnline={false}/>
      <UserRow nickName="oFheN" isOnline={false}/>
      <UserRow nickName="oFheN" isOnline={false}/>
      <UserRow nickName="oFheN" isOnline={false}/>
      <UserRow nickName="oFheN" isOnline={false}/>
      <UserRow nickName="oFheN" isOnline={false}/>
      <UserRow nickName="oFheN" isOnline={false}/>
    </Container>
  );
};

export default UserList;
