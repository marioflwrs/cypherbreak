import Navbar from "../../components/Navbar/Navbar";
import Feed from "../../components/Feed/Feed";
import "./Profile.scss";
import { Room } from "@material-ui/icons";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";


export default function Profile() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [user, setUser] = useState({});
  const username = useParams().username;

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`/users?username=${username}`);
      setUser(res.data)
    };
    fetchUser();
  }, [username, user._id]);

  return (
    <div>
      <Navbar />
      <div className="profile">
        <div className="profile-top">
          <div className="profile-cover">
            <img 
            className="profile-cover-image" 
            src={user.coverPicture ? PF + user.coverPicture : PF + "/defaultCover.jpg"} 
            alt=""
            />

            <img 
            className="profile-user-image" 
            src={user.profilePicture ? PF + user.profilePicture : PF + "/defaultProfile.jpg"} 
            alt=""
            />
            <div className="profile-info">
              <h3 className="profile-info-username">{user.username}</h3>
              <div className="profile-location-wrapper">
                <Room className="location-icon" />
                <h3 className="profile-location">{user.city}, {user.state}</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="profile-center">
          <div className="follower-container">
            <Feed username={username}/>
          </div>
        </div>
      </div>
    </div>
  )
}
