import "./Widgets.scss";
import PeopleIcon from "@mui/icons-material/People";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";

function Widgets({ type }) {
  let data;

  //temp
  const amount = 100;
  const diff = 20;

  switch (type) {
    case "user":
      data = {
        title: "USERS",
        isMoney: false,
        link: "See all users",
        icon: (
          <PeopleIcon
            className="icon"
            style={{
              color: "crimson",
              backgroundColor: "rgba(218, 165, 32, 0.2",
            }}
          />
        ),
      };
      break;
    case "order":
      data = {
        title: "ORDERS",
        isMoney: false,
        link: "View all orders",
        icon: (
          <ShoppingCartIcon
            className="icon"
            style={{
              color: "orange",
              backgroundColor: "rgba(218, 165, 32, 0.2",
            }}
          />
        ),
      };
      break;
    case "earnings":
      data = {
        title: "EARNINGS",
        isMoney: true,
        link: "View earnings",
        icon: (
          <MonetizationOnIcon
            className="icon"
            style={{
              color: "green",
              backgroundColor: "lightgreen",
            }}
          />
        ),
      };
      break;
    case "balance":
      data = {
        title: "BALANCE",
        isMoney: true,
        link: "See details",
        icon: (
          <AccountBalanceWalletIcon
            className="icon"
            style={{
              color: "crimson",
              backgroundColor: "rgba(218, 165, 32, 0.2",
            }}
          />
        ),
      };
      break;
    default:
      break;
  }

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">
          {data.isMoney && "$"}
          {amount}
        </span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        <div className="percentage positive">
          <KeyboardArrowUpIcon />
          {diff}%
        </div>

        {data.icon}
      </div>
    </div>
  );
}

export default Widgets;
