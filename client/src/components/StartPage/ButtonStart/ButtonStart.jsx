import { useNavigate } from 'react-router-dom';

import './ButtonStart.css';

const ButtonStart = () => {
  const navigate = useNavigate();

  return (
    <>
      <button className="button-start" onClick={() => navigate('/login')}>
        {"Let's start"}
      </button>
    </>
  );
};

export default ButtonStart;
