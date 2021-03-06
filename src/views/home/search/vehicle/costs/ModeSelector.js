import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.nav`
  display: flex;
`
const Tab = styled.button`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 3rem;
  margin-bottom: -1rem;
  padding: 0.25rem 0 1rem;
  color: ${(props) =>
    props.modified
      ? props.theme.colors.background
      : props.current
      ? props.theme.colors.text
      : props.theme.colors.main};
  text-align: center;
  text-decoration: none;
  background-color: ${(props) =>
    props.modified
      ? props.theme.colors.main
      : props.current
      ? props.theme.colors.secondLight
      : 'transparent'};
  border: none;
  border-radius: 1rem 1rem 0 0;
  cursor: pointer;
  white-space: nowrap;
  transition: background-color 200ms ease-out;

  &:hover {
    background-color: ${(props) =>
      props.modified
        ? props.theme.colors.main
        : props.current
        ? props.theme.colors.secondLight
        : props.theme.colors.footer};
  }
`
export default function ModeSelector(props) {
  return (
    <Wrapper>
      {props.technologies.map((technology) => (
        <Tab
          key={technology.vehicleTechnology}
          current={props.open === technology.vehicleTechnology}
          modified={props.costs[technology.vehicleTechnology]}
          onClick={() => props.setOpen(technology.vehicleTechnology)}
        >
          {technology.shortName}
        </Tab>
      ))}
    </Wrapper>
  )
}
