import "./New.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadIcon from "@mui/icons-material/DriveFolderUpload";

function New() {
  return (
    <div className="new">
      <Sidebar />

      <div className="new-container">
        <Navbar />

        <div className="top">
          <h5>Add New User</h5>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src="https://media.istockphoto.com/id/1401105799/vector/no-image-vector-symbol-missing-available-icon-no-gallery-for-this-moment-placeholder.jpg?s=612x612&w=0&k=20&c=TW1ZU3X512_3lGWDFhEygj66CT1Ikj1-R51FCdwJ31E="
              alt="avatar"
            />
          </div>

          <div className="right">
            <form>
              <div className="input-container">
                <label htmlFor="file">
                  Upload Image: <DriveFolderUploadIcon className="icon" />
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>

              <div className="input-container">
                <label>Username</label>
                <input type="text" placeholder="janedoe" />
              </div>

              <div className="input-container">
                <label>Name and surname</label>
                <input type="text" placeholder="Jane Doe" />
              </div>

              <div className="input-container">
                <label>Email</label>
                <input type="email" placeholder="janedoe@gmail.com" />
              </div>

              <div className="input-container">
                <label>Phone number</label>
                <input type="text" placeholder="+99599999999" />
              </div>

              <div className="input-container">
                <label>Password</label>
                <input type="password" />
              </div>

              <div className="input-container">
                <label>Address</label>
                <input
                  type="password"
                  placeholder="Station square #2. 0100 TBILISI"
                />
              </div>

              <div className="input-container">
                <label>Country</label>
                <input type="password" placeholder="Georgia" />
              </div>

              <button>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default New;
