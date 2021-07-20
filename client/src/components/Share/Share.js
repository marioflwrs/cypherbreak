import "./share.scss";
import {Photo, Videocam, Event} from "@material-ui/icons";

export default function Share() {
  return (
    <div className="share">

      <div className="share-wrapper">

        <div className="share-top">
          <input type="text" className="share-input" placeholder="Create a Post Share"/>
        </div>

        <hr className="share-hr" />

        <div className="share-bottom">

          <div className="share-options">
            <div className="share-option">
              <Photo htmlColor="lightblue" className="share-icon" />
              <span className="share-option-text">Photo</span>
            </div>

            <div className="share-option">
              <Videocam htmlColor="tomato" className="share-icon" />
              <span className="share-option-text">Video</span>
            </div>

            <div className="share-option">
              <Event htmlColor="goldenrod" className="share-icon" />
              <span className="share-option-text">Jam</span>
            </div>

            <button className="share-button">Share</button>
          </div>
         

        </div>


      </div>

    </div>
  )
}
