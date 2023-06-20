import logo from "../../../assets/Cosmic_Tetris.png";
import "./Logo.css";
const Logo = () => {
  return (
    <div className="logo">
      <img src={logo} alt="logo" />
      <div className="logo-font">Cosmic Tetris</div>
    </div>
  );
};

export default Logo;
