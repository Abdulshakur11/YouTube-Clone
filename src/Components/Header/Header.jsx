import "./Header.scss";

// images
import hamburger_black from "../../assets/images/hamburger-black.png";
import header_camera from "../../assets/images/header-camera.png";
import header_menu from "../../assets/images/header-menu.png";
import header_notification from "../../assets/images/notifaction.png";
import user_img from "../../assets/images/user-img.png";
import { Link } from "react-router-dom";
import YouTube from "../../Library/youtube-black";


function Header() {

  return (
    <>
      <header className="site-header dark">
        <div className="header__wrapper">

          <img className="hamburger" src={hamburger_black} alt="hamburger" width="20" height="17" />

          <Link className="site-logo" to="/">
            <YouTube />
          </Link>
          <input className="search-input" type="search" placeholder="Search" />

          <ul className="header-list">
            <li className="header-item">
              <img src={header_camera} alt="" />
            </li>

            <li className="header-item">
              <img src={header_menu} alt="" />
            </li>

            <li className="header-item">
              <img src={header_notification} alt="" />
            </li>

            <li className="header-item">
              <img src={user_img} alt="" width="40" height="40" />
            </li>
          </ul>
        </div>
      </header>
    </>
  )
}

export default Header