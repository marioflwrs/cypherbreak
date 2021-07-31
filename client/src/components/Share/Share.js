import "./share.scss";
import {Photo, Videocam, Event} from "@material-ui/icons";
import { useContext, useRef, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";

export default function Share() {
  const { user } = useContext(AuthContext);
  const [file, setFile] = useState(null);
  const desc = useRef();

  const submitHandler = async (e) => {
    e.preventDefault()
    const newPost = {
      userId: user._id,
      desc: desc.current.value
    }
    try {
      await axios.post("/posts", newPost)
    } catch(err) {

    }
  }

  return (
    <div className="share">
      <div className="share-wrapper">
        <div className="share-top">
          <input 
            type="text" 
            className="share-input" 
            placeholder="Create a Post"
            ref={desc}
          />
        </div>
        <hr className="share-hr" />
        <form className="share-bottom" onSubmit={submitHandler}>
          <div className="share-options">
            <label htmlFor="file" className="share-option">
              <Photo htmlColor="lightblue" className="share-icon" />
              <span className="share-option-text">Photo</span>
              <input style={{display: "none"}} type="file" id="file" accept=".png, .jpeg, .jpg" onChange={(e) => setFile(e.target.files[0])} />
            </label>
            <div className="share-option">
              <Videocam htmlColor="tomato" className="share-icon" />
              <span className="share-option-text">Video</span>
            </div>
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
