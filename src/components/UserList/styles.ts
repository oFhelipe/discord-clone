import styled from 'styled-components';

export const Container = styled.div`
  grid-area: UL;
  display: flex;
  flex-direction: column;
  padding: 3px 6px 0 16px;
  background-color: var(--secondary);
  max-height: calc(100vh - 46px);
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 4px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: var(--tertiary);
    border-radius: 4px;
  }

  ::-webkit-scrollbar-track {
    background-color: var(--secondary);
  }
`
export const Role = styled.span`
  margin-top: 20px;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 500;
  color: var(--gray);
`

export const User = styled.div<{isOnline: boolean}>`
  margin-top: 5px;
  padding: 5px;
  display: flex;
  align-items: center;
  flex-direction: row;
  cursor: pointer;
  border-radius: 4px;
  background-color: transparent;
  transition: background-color 0.2s;
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    opacity: 1;
  }
  opacity: ${props => props.isOnline ? 1 : 0.4};
`

export const Avatar = styled.div`
  flex-shrink: 0;
  height: 32px;
  width: 32px;
  background-color: var(--primary);
  border-radius: 50%;

  &.bot {
    background-color: var(--mention-detail);
  }
`

export const Name = styled.strong`
  margin-left: 13px;
  font-weight: 400;
  color: var(--white);
  opacity: 0.7;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`

export const BotTag = styled.div`
  margin-left: 9px;
  background-color: var(--discord);
  color: var(--white);
  border-radius: 4px;
  padding: 4px 5px;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 11px;
`

