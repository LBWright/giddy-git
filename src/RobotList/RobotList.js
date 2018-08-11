import React from 'react';
import styled from 'styled-components';
import RobotListItem from './RobotListItem';

const robots = [
  { id: 1, name: 'Sammy', material: 'steel' },
  { id: 2, name: 'Joe', material: 'aluminum' },
  { id: 3, name: 'Roger', material: 'adamantium' }
];

const StyledRobotList = styled.ul`
  list-style: none;
  max-width: 50vw;
  margin: 0 auto;
  padding: 0.4rem;
`;

const RobotList = () => (
  <StyledRobotList>
    {robots.map(robot => (
      <RobotListItem key={robot.id} {...robot} />
    ))}
  </StyledRobotList>
);

export default RobotList;
