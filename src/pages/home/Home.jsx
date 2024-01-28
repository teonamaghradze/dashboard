import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import "./Home.scss";

function Home() {
  return (
    <div className="home">
      <Sidebar />
      <div className="home-container">
        <Navbar />
        home container
      </div>
    </div>
  );
}

export default Home;
