import "./share.scss";
import {Photo, Event, Cancel} from "@material-ui/icons";
import { useContext, useRef, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";

export default function Share() {
  const { user } = useContext(AuthContext);
  const [file, setFile] = useState(null);
  const desc = useRef();
  const title = useRef();

  const submitHandler = async (e) => {
    e.preventDefault()
    const newPost = {
      userId: user._id,
      title: title.current.value,
      desc: desc.current.value
    };

    if (file) {
      const data = new FormData();
      const fileName = Date.now() + file.name;
      data.append("name", fileName);
      data.append("file", file);
      newPost.img = fileName;
      console.log(newPost);
      try {
        await axios.post("/upload", data);
      } catch (err) {}
    }
    try {
      await axios.post("/posts", newPost);
      window.location.reload();
    } catch (err) {}
  };

  return (
    <div className="share">
      <div className="share-wrapper">
        <div className="share-top">
          <input 
            type="text"
            className="share-input-title"
            placeholder="Title"
            ref={title}
            required
          />
          <textarea 
            type="text" 
            className="share-input-desc" 
            ref={desc}
          />
        </div>
        <hr className="share-hr" />
        {file && (
          <div className="share-img-container">
            <img 
              className="share-img" 
              src={URL.createObjectURL(file)} 
              alt="" 
              />
            <Cancel 
              className="share-cancel-img" 
              onClick={() => setFile(null)} 
              style={{cursor: "pointer", color:"white"}} 
            />
          </div>
        )}
        <form className="share-bottom" onSubmit={submitHandler}>
          <div className="share-options">
            <label htmlFor="file" className="share-option">
              <Photo htmlColor="lightblue" className="share-icon" />
              <span className="share-option-text">Photo</span>
              <input 
                style={{display: "none"}} 
                type="file" id="file" 
                accept=".png, .jpeg, .jpg" 
                onChange={(e) => setFile(e.target.files[0])} 
              />

            </label>
            <div className="share-option">
              <Event htmlColor="goldenrod" className="share-icon" />
              <span className="share-option-text">Jams</span>
            </div>
            <button className="share-button" type="submit">Share</button>
          </div>
        </form>
      </div>
    </div>
  );
}
