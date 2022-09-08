import profileImage from "../profile-image.png";
import "./style/home.css";

function Home() {
  return (
    <div className="home">
      <div className="home-text">
        <h2>Hi! I'm Alex, </h2>
        <p>
          and I am a student at the University of Michigan. I am studying
          Computer Science Engineering and Mathematics.
        </p>
      </div>
      <div className="home-image">
        <img src={profileImage} alt="profile-image" />
      </div>
    </div>
  );
}

export default Home;
