import styled from 'styled-components';
import { Mic, Headset, Settings } from 'styled-icons/material'

export const Container = styled.div`
  grid-area: UI;
  background-color: var(--quaternary);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 0px 0px;
`

export const Profile = styled.div`
  display: flex;
  align-items: center;
`

export const Avatar = styled.div`
  height: 32px;
  width: 32px;
  border-radius: 50%;
  background-color: var(--gray);
`

export const UserData = styled.div`
  margin-left: 8px;
  display: flex;
  flex-direction: column;
`
export const Name = styled.strong`
  color: var(--white);
  font-size: 13px;
  display: block;
`
export const Tag = styled.span`
  color: var(--gray);
  font-size: 13px;
`

export const Icons = styled.div`
  display: flex;

  & > svg:not(:first-child) {
    margin-left: 10px;
  }
`

export const MicIcon = styled(Mic)`
  color: var(--white);
  opacity: 0.7;
  cursor: pointer;
  transition: 0.2s;
  height:22px;
  width: 22px;

  &:hover {
    opacity: 1;
  }
`

export const HeadPhoneIcon = styled(Headset)`
  color: var(--white);
  opacity: 0.7;
  cursor: pointer;
  transition: 0.2s;
  height:22px;
  width: 22px;

  &:hover {
    opacity: 1;
  }
`

export const SettingsIcon = styled(Settings)`
  color: var(--white);
  opacity: 0.7;
  cursor: pointer;
  transition: 0.2s;
  height:22px;
  width: 22px;

  &:hover {
    opacity: 1;
  }
`

