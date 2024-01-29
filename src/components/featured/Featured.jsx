import "./Featured.scss";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

function Featured() {
  return (
    <div className="featured">
      <div className="top">
        <h1 className="title">Total Revenue</h1>
        <MoreVertIcon fontSize="small" />
      </div>
      <div className="bottom">
        <div className="featured-chart">
          <CircularProgressbar value={70} text={"70%"} strokeWidth={5} />
        </div>
        <p className="title">Total sales made today</p>
        <p className="amount">$420</p>
        <p className="desc">
          Transaction is processing. Last payment may not be included .
        </p>
        <div className="summery">
          <div className="item">
            <div className="item-title">Target</div>
            <div className="item-result positive">
              <ExpandLessIcon fontSize="small" />
              <div className="result-amount">$12.4k</div>
            </div>
          </div>

          <div className="item">
            <div className="item-title">Last week</div>
            <div className="item-result negative">
              <ExpandMoreIcon fontSize="small" />
              <div className="result-amount">$12.4k</div>
            </div>
          </div>

          <div className="item">
            <div className="item-title">Last month</div>
            <div className="item-result positive">
              <ExpandLessIcon fontSize="small" />
              <div className="result-amount">$12.4k</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
