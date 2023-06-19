import { useSelector, useDispatch } from 'react-redux';
import { takeGame, takeMode } from './whichGameSlice';

import './HomePage.css';
import classic from '../assets/classic.gif';
import ninja from '../assets/ninja.jpg';
import sumo from '../assets/sumo.jpg';

const HomePage = () => {
  const dispatch = useDispatch();
  const game = useSelector((state) => state.whichGame.game);
  // const mode = useSelector((state) => state.whichGame.mode);
  console.log(game);
  return (
    <div className="dashboard">
      <div className="game-choise">
        {game === '' ? (
          <>
            <div
              className="game-option"
              style={{ backgroundImage: `url(${classic})` }}
              onClick={() => dispatch(takeGame('classic'))}
            >
              <p style={{ color: 'red' }}>Classic mode</p>
            </div>
            <div
              className="game-option"
              style={{ backgroundImage: `url(${ninja})` }}
              onClick={() => dispatch(takeGame('ninja'))}
            >
              <p style={{ color: 'red' }}>Ninja mode</p>
            </div>
            <div
              className="game-option"
              style={{ backgroundImage: `url(${sumo})` }}
              onClick={() => dispatch(takeGame('sumo'))}
            >
              <p style={{ color: 'red' }}>Sumo mode</p>
            </div>{' '}
          </>
        ) : (
          <>
            <div
              className="game-option"
              onClick={() => dispatch(takeMode('multy'))}
            >
              <p style={{ color: 'red' }}>Multyplayer mode</p>
            </div>
            <div
              className="game-option"
              onClick={() => dispatch(takeMode('solo'))}
            >
              <p style={{ color: 'red' }}>Solo mode</p>
            </div>
          </>
        )}
      </div>
      <div className="rating">
        <div className="rating-option">1</div>
        <div className="rating-option">2</div>
      </div>
    </div>
  );
};

export default HomePage;
