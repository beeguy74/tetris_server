// import { ReactComponent as Brand } from '../assets/logo.svg'
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { openForm } from './loginFormSlice';
import './NavBar.css';
import Logo from './Logo';

const NavBar = () => {
  // const loginForm = useSelector((state) => state.loginForm.isOpen);
  const dispatch = useDispatch();

  return (
    <nav className="navbar">
      <div className="container">
        <div className="nav-elements">
          <ul>
            <div className='nav-elements-main'>
              <li>
                <Logo />
              </li>
              <li>
                <NavLink to="/">History of game</NavLink>
              </li>
              <li>
                <NavLink to="/">About us</NavLink>
              </li>
            </div>
            <li onClick={() => dispatch(openForm(true))}>Log in</li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
