import "./Header.css";
import icon from "./icon.png";
function Header() {
  return (
    <div className="Header">
      {/* <div className="icon"> &#x25DD;&#x25DD;&#x25DD;</div> */}
      <img id="icon" src={icon} alt="Healthphoto"></img>
      <h1 className="spobiwai"> SPOBIWAI </h1>
      <ul className="ul">
        <li className="li">Home</li>
        <li className="li">My playlist</li>
        <li className="li">Premium</li>
        <li className="li">Search</li>
        <li className="li">Download</li>
        <li className="li">|</li>
        <li className="li">Sign in</li>
        <li className="li">Register</li>
      </ul>
    </div>
  );
}

export default Header;
