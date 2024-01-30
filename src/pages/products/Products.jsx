import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import TableList from "../../components/table/TableList";

import "./Products.scss";

function Products() {
  return (
    <div className="products">
      {/* <div className="left"> */}
      <Sidebar />
      {/* </div> */}
      <div className="products-container">
        <Navbar />
        <TableList />
      </div>
    </div>
  );
}

export default Products;
