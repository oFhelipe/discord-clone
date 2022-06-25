import { useRef, useEffect } from 'react'
import ChannelMessage from '../ChannelMessage';
import { Mention } from '../ChannelMessage/styles';
import { Container, Messages, InputWrapper, Input, InputIcon } from './styles'

const ChannelData = (): JSX.Element => {
  const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>
  
  useEffect(()=> {
    const div = messagesRef.current
    if(div) {
      div.scrollTop = div.scrollHeight
    }
  }, [messagesRef])
  return (
    <Container>
      <Messages ref={messagesRef}>
        {
          Array.from(Array(15).keys()).map((n)=> (
            <ChannelMessage
              key={n}
              author='oFheN'
              date='25/06/2022'
              content="Olá mundo!"/>
          ))
        }

        <ChannelMessage
          isBot
          hasMention
          author='wds'
          date='25/06/2022'
          content={
            <>
              <Mention>@oFheN</Mention>, me carrega no CS.
            </>
          }
            />
        </Messages>
      <InputWrapper>
        <Input type="text" placeholder='Conversar em #chat-livre'/>
        <InputIcon />
      </InputWrapper>
    </Container>
  );
};

export default ChannelData;
