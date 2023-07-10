import React from 'react';
import PropTypes from 'prop-types';
import { StyledCell } from './Cell.styles';
import { TETROMINOS } from '../../../tools/setup';

const Cell = ({ type }) => {
  return <StyledCell type={type} color={TETROMINOS[type].color} />;
};

Cell.propTypes = {
  type: PropTypes.string.isRequired,
};
export default React.memo(Cell);
