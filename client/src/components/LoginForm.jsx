import { useSelector, useDispatch } from 'react-redux';
import { openForm } from './loginFormSlice';
import { openHomePage } from './homePageSlice';
import HomePage from './HomePage';

import './LoginForm.css';
import { inputLogin } from './inputLoginSlice';

const LoginForm = () => {
  const dispatch = useDispatch();
  const loginForm = useSelector((state) => state.loginForm.isOpen);
  const homePage = useSelector((state) => state.homePage.isOpen);
  const inputKey = useSelector((state) => state.inputLogin.input);
  console.log(inputKey)
  console.log(`homePage: ${homePage}`);
  return (
    <>
      {loginForm === true ? (
        <div className="div-login">
          <form  autoComplete="off">
            <label>
              Your login:{' '}
              <input
              
                className="input"
                type="text"
                name="Login"
                onChange={(e) => dispatch(inputLogin(e.target.value))}
              />
            </label>
            <button
              className="input"
              type="submit"
              onClick={() => {
                dispatch(openHomePage(true));
                dispatch(openForm(false));
              }}
              value="Submit"
            >
              Submit
            </button>
          </form>
        </div>
      ) : (
        <></>
      )}
      {homePage === true ? <HomePage /> : <></>}
    </>
  );
};

export default LoginForm;
