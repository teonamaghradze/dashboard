import "./New.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadIcon from "@mui/icons-material/DriveFolderUpload";
import { useState } from "react";

function New({ inputs, title }) {
  const [file, setFile] = useState("");

  console.log(file);

  return (
    <div className="new">
      <Sidebar />

      <div className="new-container">
        <Navbar />

        <div className="top">
          <h5>{title}</h5>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : "https://media.istockphoto.com/id/1401105799/vector/no-image-vector-symbol-missing-available-icon-no-gallery-for-this-moment-placeholder.jpg?s=612x612&w=0&k=20&c=TW1ZU3X512_3lGWDFhEygj66CT1Ikj1-R51FCdwJ31E="
              }
              alt="avatar"
            />
          </div>

          <div className="right">
            <form>
              <div className="input-container">
                <label htmlFor="file">
                  Upload Image: <DriveFolderUploadIcon className="icon" />
                </label>
                <input
                  type="file"
                  id="file"
                  style={{ display: "none" }}
                  onChange={(e) => setFile(e.target.files[0])}
                />
              </div>

              {inputs.map((input) => (
                <div className="input-container" key={input.id}>
                  <label>{input.label}</label>
                  <input type={input.type} placeholder={input.placeholder} />
                </div>
              ))}

              <button>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default New;
