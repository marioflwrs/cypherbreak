import Navbar from "../../components/Navbar/Navbar";
import Feed from "../../components/Feed/Feed";
import "./home.scss";

export default function Home() {
  return (
    <div className="home-wrapper">
      <div className="home-inner-wrapper">
        <Navbar />
        <Feed />
      </div>
    </div>
  )
}