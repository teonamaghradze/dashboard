import TableList from "../../components/table/TableList";
import Chart from "../../components/chart/Chart";
import Featured from "../../components/featured/Featured";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Widgets from "../../components/widgets/Widgets";
import "./Home.scss";

function Home() {
  return (
    <div className="home">
      <Sidebar />
      <div className="home-container">
        <Navbar />
        <div className="widgets">
          <Widgets type="user" />
          <Widgets type="order" />
          <Widgets type="earnings" />
          <Widgets type="balance" />
        </div>
        <div className="charts">
          <Featured />
          <Chart title="Last 6 Months (number)" aspect={2 / 1} />
        </div>

        <div className="list-container">
          <div className="list-title">Latest Transactions</div>
          <TableList />
        </div>
      </div>
    </div>
  );
}

export default Home;
