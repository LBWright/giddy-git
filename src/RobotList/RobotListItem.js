import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledRobotListItem = styled.li`
  border: 2px solid gray;
  box-shadow: 2px 5px 8px #888888;
  padding: 0.6rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 1.2rem 0;
`;

const RobotListItem = ({ name, material }) => (
  <StyledRobotListItem>
    <h2>{name}</h2>
    <span>{material}</span>
  </StyledRobotListItem>
);

RobotListItem.propTypes = {
  name: PropTypes.string.isRequired,
  material: PropTypes.string.isRequired
};

export default RobotListItem;
