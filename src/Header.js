import React from "react";
import "./header.css";

// ! icon imports
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import SupervisorAccount from "@mui/icons-material/SupervisorAccount";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ChatIcon from "@mui/icons-material/Chat";
import Notification from "@mui/icons-material/Notifications";

// ! firebase import
import { auth } from "./firebase";

// ! redux imports
import { useDispatch } from "react-redux";
import { logout } from "./features/userSlice";

// ! components imports
import HeaderOption from "./HeaderOption";

function Header() {
  const dispatch = useDispatch();

  const logoutOfApp = () => {
    dispatch(logout);
    auth.signOut();
  };

  return (
    <div className="header">
      <div className="header__left">
        <img src="img/linkedin.png" alt="img" />

        <div className="header__search">
          <SearchIcon />
          <input type="text" placeholder="search" />
        </div>
      </div>
      <div className="header__right">
        {/* header option */}
        <HeaderOption Icon={HomeIcon} title="Home" />
        <HeaderOption Icon={SupervisorAccount} title="Network" />
        <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
        <HeaderOption Icon={ChatIcon} title="Message" />
        <HeaderOption Icon={Notification} title="Notification" />

        <HeaderOption
          avatar={true}
          onClick={logoutOfApp}
          avater="weird"
          title="me"
        />
      </div>
    </div>
  );
}

export default Header;
