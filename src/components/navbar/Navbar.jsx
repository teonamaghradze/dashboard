import "./Navbar.scss";
import SearchIcon from "@mui/icons-material/Search";
import TranslateIcon from "@mui/icons-material/Translate";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import AllOutIcon from "@mui/icons-material/AllOut";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import ListIcon from "@mui/icons-material/List";
import { useContext } from "react";
import { DarkmodeContext } from "../../context/darkmodeContext";

function Navbar() {
  const { dispatch } = useContext(DarkmodeContext);
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search..." />
          <SearchIcon />
        </div>

        <div className="items">
          <div className="item">
            <TranslateIcon />
            English
          </div>

          <div className="item">
            <DarkModeIcon
              className="icon"
              onClick={() => dispatch({ type: "TOGGLE" })}
            />
          </div>

          <div className="item">
            <AllOutIcon className="icon" />
          </div>

          <div className="item">
            <NotificationsNoneIcon className="icon" />
            <div className="counter">1</div>
          </div>

          <div className="item">
            <ChatBubbleOutlineIcon className="icon" />
            <div className="counter">2</div>
          </div>

          <div className="item">
            <ListIcon className="icon" />
          </div>

          <div className="item">
            <img
              src="https://www.shareicon.net/data/128x128/2016/05/26/771187_man_512x512.png"
              alt="avatar"
              className="avatar"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
