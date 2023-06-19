import { useSelector, useDispatch } from 'react-redux';
import { openForm } from './loginFormSlice';
import './ButtonStart.css';

const ButtonStart = () => {
  const dispatch = useDispatch();
  const loginForm = useSelector((state) => state.loginForm.isOpen);
  const homePage = useSelector((state) => state.homePage.isOpen);

  console.log(loginForm);

  return (
    <>
      {loginForm === false && homePage === false ? (
        <button
          className="button-start"
          onClick={() => dispatch(openForm(true))}
        >
          Let's start
        </button>
      ) : (
        <></>
      )}{' '}
    </>
  );
};

export default ButtonStart;
