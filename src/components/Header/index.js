import { AiOutlineMenuFold } from "react-icons/ai";
import { CiDark } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import { FaLanguage } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";

import "./index.css";

const Header = (props) => {
  const { menuClicked } = props;
  const toggleSidebar = () => {
    menuClicked();
  };
  return (
    <nav className="header-nav">
      <div className="menu">
        <AiOutlineMenuFold className="menu-icon" onClick={toggleSidebar} />
      </div>
      <div className="right-menu">
        <CiDark className="icon" />
        <IoIosNotificationsOutline className="icon" />
        <FaLanguage className="icon" />
        <CgProfile className="icon" />
      </div>
    </nav>
  );
};

export default Header;
