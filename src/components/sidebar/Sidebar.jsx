import "./Sidebar.scss";

import SpaceDashboardIcon from "@mui/icons-material/SpaceDashboard";
import PeopleIcon from "@mui/icons-material/People";
import CategoryIcon from "@mui/icons-material/Category";
import RedeemIcon from "@mui/icons-material/Redeem";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import SettingsSystemDaydreamIcon from "@mui/icons-material/SettingsSystemDaydream";
import PsychologyIcon from "@mui/icons-material/Psychology";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import LogoutIcon from "@mui/icons-material/Logout";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

import { Link } from "react-router-dom";
import { useContext } from "react";
import { DarkmodeContext } from "../../context/darkmodeContext";

function Sidebar() {
  const { dispatch } = useContext(DarkmodeContext);
  return (
    <div className={"sidebar"}>
      <div className="top">
        <Link to="/">
          <span className="logo">ADMIN</span>
        </Link>
      </div>

      <hr />

      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
            <Link to="/">
              <SpaceDashboardIcon className="icon" />
              <span>Dashboard</span>
            </Link>
          </li>

          <p className="title">LISTS</p>

          <li>
            <Link to="/users">
              <PeopleIcon className="icon" />
              <span>Users</span>
            </Link>
          </li>
          <li>
            <Link to="/products">
              <CategoryIcon className="icon" />
              <span>Products</span>
            </Link>
          </li>
          <li>
            <RedeemIcon className="icon" />
            <span>Orders</span>
          </li>

          <li>
            <LocalShippingIcon className="icon" />
            <span>Delivery</span>
          </li>

          <p className="title">USEFUL</p>
          <li>
            <QueryStatsIcon className="icon" />
            <span>Stats</span>
          </li>

          <li>
            <NotificationsActiveIcon className="icon" />
            <span>Notifications</span>
          </li>

          <p className="title">SERVICES</p>

          <li>
            <SettingsSystemDaydreamIcon className="icon" />
            <span>System Health</span>
          </li>

          <li>
            <PsychologyIcon className="icon" />
            <span>Logs</span>
          </li>

          <li>
            <SettingsIcon className="icon" />
            <span>Settings</span>
          </li>

          <p className="title">USER</p>

          <li>
            <AccountCircleIcon className="icon" />
            <span>Profile</span>
          </li>

          <li>
            <LogoutIcon className="icon" />
            <span>Log out</span>
          </li>
        </ul>
      </div>

      <div className="bottom">
        <LightModeIcon
          className="mode-option"
          onClick={() => dispatch({ type: "LIGHT" })}
        />
        <DarkModeIcon
          className="mode-option"
          onClick={() => dispatch({ type: "DARK" })}
        />
        {/* <div className="color-option"></div>
        <div className="color-option"></div> */}
      </div>
    </div>
  );
}

export default Sidebar;
