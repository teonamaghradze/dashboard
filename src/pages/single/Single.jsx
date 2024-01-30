import "./Single.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/Chart";
import TableList from "../../components/table/TableList";

function Single() {
  return (
    <div className="single">
      <Sidebar />
      <div className="single-container">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="edit-button">Edit</div>
            <h6>Information</h6>
            <div className="item">
              <img src="" alt="item-img" className="item-img" />
              <div className="details">
                <h1>Jane Doe</h1>
                <div className="detail-item">
                  <span>Email:</span>
                  <span className="item-key">janedoe@gmail.com</span>
                </div>

                <div className="detail-item">
                  <span>Phone:</span>
                  <span className="item-key">+9955555555</span>
                </div>

                <div className="detail-item">
                  <span>Address:</span>
                  <span className="item-key">
                    Station square #2. 0100 TBILISI.
                  </span>
                </div>

                <div className="detail-item">
                  <span>Country:</span>
                  <span className="item-key">Georgia</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={3 / 1} title="User Spendings" />
          </div>
        </div>
        <div className="bottom">
          <h6>Last transactions</h6>

          <TableList />
        </div>
      </div>
    </div>
  );
}

export default Single;
