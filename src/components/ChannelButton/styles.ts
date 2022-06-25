import styled from 'styled-components';
import { Hashtag } from 'styled-icons/heroicons-outline';
import { PersonAdd, Settings } from 'styled-icons/material'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  cursor: pointer;

  padding: 5px 3px;
  border-radius: 5px;

  background-color: transparent;

  transition: background-color 0.2s;

  svg {
      transition: opacity 0.2s;
  }

  &:hover {
    svg {
      visibility: visible;
      opacity: 1;
    }
  }

  &:hover, &.active {
    background-color: var(--quinary);
    span {
      color: var(--white);
    }
  }
`

export const GroupContainer = styled.div`
  display: flex;
  align-items: center;
`

export const Title = styled.span`
  margin-left: 5px;
  color: var(--senary);
`

export const HashtagIcon = styled(Hashtag)`
  width: 20px;
  height: 20px;
  color: var(--symbol);
`

export const InviteIcon = styled(PersonAdd)`
  width: 16px;
  height: 16px;
  color: var(--symbol);
  cursor: pointer;
  transition: color 0.2s;
  &:hover {
    color: var(--white);
  }
  visibility: hidden;
  opacity: 0;
`

export const SettingsIcon = styled(Settings)`
  margin-left: 4px;
  width: 16px;
  height: 16px;
  color: var(--symbol);
  cursor: pointer;
  transition: color 0.2s;
  &:hover {
    color: var(--white);
  }
  visibility: hidden;
  opacity: 0;
`
