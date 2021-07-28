
import "./post.scss";
import { useState } from "react";
import { Users } from "../../dumbData";
import {MoreVert, ArrowDropUp} from "@material-ui/icons";

export default function Post({post}) {
  const [upvote,setUpvote] = useState(post.upvote)
  const [isUpvoted,SetIsUpvoted] = useState(false)
  const [voteColor, setVoteColor] = useState("white")
  const [isVoteColor, setIsVoteColor] = useState(false)

  const upvoteHandler = () => {
    setUpvote(isUpvoted ? upvote - 1 : upvote + 1)
    SetIsUpvoted(!isUpvoted)
    setVoteColor(isVoteColor ? "white" : "goldenrod")
    setIsVoteColor(!isVoteColor)
  }

  return (
    <div className="post">
      <div className="post-wrapper">
      
        <div className="post-top">
        
          <div className="post-topleft">
            <img 
            className="post-profile-img" 
            src={Users.filter((u) => u.id === post?.userId)[0].userAvatar} 
            alt="" 
            />

            <span className="post-username">
              {Users.filter((u) => u.id === post?.userId)[0].username}
            </span>
            
            <span className="post-date">
              {post.date}
            </span>
          </div>

          <div className="post-top-right">
            <MoreVert htmlColor="white"/>
          </div>
        </div>

        <div className="post-center">
          <span className="post-text">{post?.desc}</span>
          <img className="post-image" src={post?.photo} alt="" />
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
