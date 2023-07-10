import PropTypes from 'prop-types';
import { StyledStartButton } from './StartButton.styles';

const StartButton = ({ callback }) => (
  <StyledStartButton onClick={callback}>Start Game</StyledStartButton>
);

StartButton.propTypes = {
  callback: PropTypes.func.isRequired,
};

export default StartButton;