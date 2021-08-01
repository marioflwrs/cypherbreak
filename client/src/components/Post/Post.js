import "./post.scss";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { MoreVert, ArrowDropUp } from "@material-ui/icons";
import { format } from "timeago.js";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

export default function Post({post}) {
  const [upvote,setUpvote] = useState(post.likes.length);
  const [isUpvoted,setIsUpvoted] = useState(false);
  const [voteColor, setVoteColor] = useState("white");
  const [isVoteColor, setIsVoteColor] = useState(false);
  const [user, setUser] = useState({});
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const { user:currentUser} = useContext(AuthContext);

  useEffect(() => {
    setIsUpvoted(post.likes.includes(currentUser._id));
  }, [currentUser._id, post.likes]);

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`/users?userId=${post.userId}`);
      setUser(res.data)
    };
    fetchUser();
  }, [post.userId]);

  const upvoteHandler = () => {
    try {
      axios.put("/posts/"+post._id+"/like", {userId: currentUser._id});
    } catch(err){

    }
    setUpvote(isUpvoted ? upvote - 1 : upvote + 1)
    setIsUpvoted(!isUpvoted)
    setVoteColor(isVoteColor ? "white" : "goldenrod")
    setIsVoteColor(!isVoteColor)
    
  };

  return (
    <div className="post">
      <div className="post-wrapper">
      
        <div className="post-top">
        
          <div className="post-topleft">
            <Link to={`/profile/${user.username}`}>
              <img 
              className="post-profile-img" 
              src={user.profilePicture ? PF + user.profilePicture : PF + "/defaultProfile.jpg"}
              alt="" 
              />
            </Link>

            <span className="post-username">
              {user.username}
            </span>
            
            <span className="post-date">
              {format(post.createdAt)}
            </span>
          </div>

          <div className="post-top-right">
            <MoreVert htmlColor="white"/>
          </div>
        </div>

        <div className="post-center">
          <h1 className="post-text">{post.title}</h1>
          <span className="post-text">{post?.desc}</span>
          <img className="post-image" src={PF+post.img} alt="" />
        </div>

        <div className="post-bottom">

          <div className="post-bottom-left">
            <div className="upped-wrapper" onClick={upvoteHandler}>
              <ArrowDropUp htmlColor={voteColor} className="arrow-up"  />
              <span className="post-up-counter">{upvote} Up</span>
            </div>
          </div>

          <div className="post-bottom-right">
            <span className="post-comment-text">{post.comment} comments</span>
          </div>  

        </div>
      </div>      
    </div>
  )
}
