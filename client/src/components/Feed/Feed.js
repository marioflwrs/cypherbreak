import { useContext, useEffect, useState } from "react";
import "./feed.scss";
import Post from "../Post/Post";
import Share from "../Share/Share";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";



export default function Feed({ username }) {
  const [posts, setPosts] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = username 
      ? await axios.get("/posts/profile/" + username)
      : await axios.get("posts/timeline/" + user._id);
      setPosts(res.data)
    };
    fetchPosts();
  }, [username, user._id]);

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
