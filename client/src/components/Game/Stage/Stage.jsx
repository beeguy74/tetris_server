import PropTypes from 'prop-types';
import Cell from '../Cell/Cell';
import { StyledStage } from './Stage.styles';


const Stage = ({ stage }) => (
  <StyledStage>
    {stage.map((row) => row.map((cell, x) => <Cell key={x} type={cell[0]} />))}
  </StyledStage>
);

Stage.propTypes = {
  stage: PropTypes.arrayOf(
    PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string))
  ).isRequired,
};
export default Stage;
