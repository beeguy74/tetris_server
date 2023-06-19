import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { openForm } from "./loginFormSlice";
import "./ButtonStart.css";

const ButtonStart = () => {
  const dispatch = useDispatch();
  const loginForm = useSelector((state) => state.loginForm.isOpen);
  const homePage = useSelector((state) => state.homePage.isOpen);
  const navigate = useNavigate();

  console.log(loginForm);

  return (
    <>
      <button className="button-start" onClick={() => navigate("/login")}>
        Let's start
      </button>
    </>
  );
};

export default ButtonStart;
