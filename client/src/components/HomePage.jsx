import { useSelector, useDispatch } from 'react-redux';
import { takeGame, takeMode } from './whichGameSlice';

import './HomePage.css';
import classic from '../assets/classic.gif';
import ninja from '../assets/ninja.jpg';
import sumo from '../assets/sumo.jpg';
import solo from '../assets/solo.png';
import multyplayer from '../assets/multyplayer.png';


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
            <div className="div-with-background">
              <div
                className="game-option"
                style={{ backgroundImage: `url(${classic})` }}
                onClick={() => dispatch(takeGame('classic'))}
              >
                <p className="game-option-text">Classic mode</p>
              </div>
            </div>
            <div
              className="game-option"
              style={{ backgroundImage: `url(${ninja})` }}
              onClick={() => dispatch(takeGame('ninja'))}
            >
              <p className="game-option-text">Ninja mode</p>
            </div>
            <div
              className="game-option"
              style={{ backgroundImage: `url(${sumo})` }}
              onClick={() => dispatch(takeGame('sumo'))}
            >
              <p className="game-option-text">Sumo mode</p>
            </div>{' '}
          </>
        ) : (
          <>
            <div
              className="game-option"
              style={{ backgroundImage: `url(${multyplayer})` }}
              onClick={() => dispatch(takeMode('multy'))}
            >
              <p className="game-option-text">Multyplayer mode</p>
            </div>
            <div
              className="game-option"
              style={{ backgroundImage: `url(${solo})` }}
              onClick={() => dispatch(takeMode('solo'))}
            >
              <p className="game-option-text">Solo mode</p>
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
