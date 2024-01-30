import "./Datatable.scss";
import { DataGrid } from "@mui/x-data-grid";

import { userColumns, userRows } from "../../dataSource";
import { Link } from "react-router-dom";
import { useState } from "react";
import TableList from "../table/TableList";

function Datatable() {
  const [data, setData] = useState(userRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cell-action">
            <Link to="/users/test">
              <div className="view-button">View</div>
            </Link>
            <div
              className="delete-button"
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];

  return (
    <>
      {/* <TableList /> */}

      <div className="datatable">
        <div className="datatable-title">
          Add New User
          <Link className="link" to="/users/new">
            Add New
          </Link>
        </div>
        <DataGrid
          className="datagrid"
          rows={data}
          columns={userColumns.concat(actionColumn)}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
        />
      </div>
    </>
  );
}

export default Datatable;
