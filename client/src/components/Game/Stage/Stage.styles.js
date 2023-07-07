import styled from 'styled-components';
import { STAGE_WIDTH, STAGE_HEIGHT } from '../../../tools/setup';

export const StyledStage = styled.div`
  display: grid;
  grid-template-columns: repeat(${STAGE_WIDTH}, 35px);
  grid-template-rows: repeat(${STAGE_HEIGHT}, 35px);
  grid-gap: 1px;
  border: 1px solid #777;
  background: #222;
`;
