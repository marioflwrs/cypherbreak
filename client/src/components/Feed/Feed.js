import "./feed.scss";

import Post from "../Post/Post";
import Share from "../Share/Share";
import {Posts} from "../../dumbData";

export default function Feed() {
  return (
    <div className="feed">
      <div className="feed-wrapper">
        <Share />
        {Posts.map((p) => (
          <Post key={p.id} post={p} />
        ))}
      </div>
    </div>
  )
}
