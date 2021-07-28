import Navbar from "../../components/Navbar/Navbar";
import "./Profile.scss";

import { Room } from "@material-ui/icons";

export default function Profile() {
  return (
    <div>
      <Navbar />
      <div className="profile">
        <div className="profile-top">
          <div className="profile-cover">
            <img 
            className="profile-cover-image" 
            src="assets/images/foundation-cover.jpg" 
            alt="" 
            />

            <img 
            className="profile-user-image" 
            src="assets/images/box.JPG" 
            alt=""
            />
            <div className="profile-info">
              <h3 className="profile-info-username">Boxwon</h3>
              <div className="profile-location-wrapper">
                <Room className="location-icon" />
                <h3 className="profile-location">Brooklyn, NY</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="profile-center">
          <h2>Followers</h2>
          <div className="follower-container">
            <div className="follower-content">
              <img className="follower-image-box" src="./assets/images/domYo.JPG" alt="" />
              <span className="follwer-name">John Doe</span>
            </div>
            <div className="follower-content">
              <img className="follower-image-box" src="./assets/images/fleg1.JPG" alt="" />
              <span className="follwer-name">John Doe</span>
            </div>
            <div className="follower-content">
              <img className="follower-image-box" src="./assets/images/hibbz.JPG" alt="" />
              <span className="follwer-name">John Doe</span>
            </div>
            <div className="follower-content">
              <img className="follower-image-box" src="./assets/images/ray.JPG" alt="" />
              <span className="follwer-name">John Doe</span>
            </div>
            <div className="follower-content">
              <img className="follower-image-box" src="./assets/images/shaggy.JPG" alt="" />
              <span className="follwer-name">John Doe</span>
            </div>
          </div>
          

        </div>
      </div>
    </div>
  )
}
