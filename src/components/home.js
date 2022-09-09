import profileImage from "../profile-image.png";
import "./style/home.css";

function Home() {
  return (
    <div className="home">
      <div className="home-text">
        <h2>Hi I'm Alex! </h2>
        <p>
          I am a student at the University of Michigan studying Computer Science
          Engineering and Mathematics.
        </p>
        <p>
          My interests are in Algorithms, Machine Learning, and Front End
          Development.
        </p>
        <a
          href="https://drive.google.com/file/d/1ftYdAuW-9rzo1lf20h_ZvqYOQ-SxT5qb/view?usp=sharing"
          target="_blank"
        >
          <button className="resume">Download My Resume</button>
        </a>
      </div>
      <div className="home-image">
        <img src={profileImage} alt="profile-image" />
      </div>
    </div>
  );
}

export default Home;
