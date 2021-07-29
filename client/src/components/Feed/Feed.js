import { useEffect, useState } from "react";
import "./feed.scss";
import Post from "../Post/Post";
import Share from "../Share/Share";
import axios from "axios";


export default function Feed({ username }) {
  const [posts, setPosts] = useState([]);
  

  useEffect(() => {
    const fetchPosts = async () => {
      const res = username 
      ? await axios.get("/posts/profile/" + username)
      : await axios.get("posts/timeline/60da008ac57f43480c4c9461");
      setPosts(res.data)
    };
    fetchPosts();
  }, [username]);

  return (
    <div className="feed">
      <div className="feed-wrapper">
        <Share />
        {posts.map((p) => (
          <Post key={p._id} post={p} />
        ))}
      </div>
    </div>
  )
}
