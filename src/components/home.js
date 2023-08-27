import profileImage from "../profile-image.png";
import "./style/home.css";

const oldResume = "https://drive.google.com/file/d/1ftYdAuW-9rzo1lf20h_ZvqYOQ-SxT5qb/view?usp=sharing";
const newResume = "https://drive.google.com/file/d/1blI85aTVQDOKWdlSRz-jQsfhTY8goAez/view?usp=sharing";

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
          I am currently in my final year of my undergrad. After graduating, I will go through Michigan's SUGS program to pursue my Master's degree in Computer Science.
        </p>
        <a
          href={newResume}
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
