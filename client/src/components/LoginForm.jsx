import { useSelector, useDispatch } from "react-redux";
import { openForm } from "./loginFormSlice";
import { useNavigate } from "react-router-dom";
import "./LoginForm.css";
import { inputLogin } from "./inputLoginSlice";

const LoginForm = () => {
  const dispatch = useDispatch();
  const inputKey = useSelector((state) => state.inputLogin.input);
  console.log(inputKey);

  const navigate = useNavigate();
  return (
    <>
      <div className="div-login">
        <form autoComplete="off">
          <label>
            Your login:{" "}
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
              // dispatch(openHomePage(true));
              dispatch(openForm(false));
              navigate("/home");
            }}
            value="Submit"
          >
            Submit
          </button>
        </form>
      </div>
      {/* {loginForm === true ? (
        
      ) : (
        <></>
      )}
      {homePage === true ? <HomePage /> : <></>} */}
    </>
  );
};

export default LoginForm;
