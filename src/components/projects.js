import "./style/projects.css";

const projects = [
  {
    name: "Alex's Alcove: Assorted Javascript Projects",
    languages: ["Javascript", "HTML", "CSS"],
    link: "https://projects.alexanderdelaiglesia.com/",
    description: [
      "My old website, developed in Javascript and HTML using Bootstrap",
      "This contains a bunch of random programs I have made!",
      "Feel free to go to projects.alexanderdelaiglesia.com to see these!",
    ],
  },
  {
    name: "Stock Market and Trading Simulator",
    languages: ["C++"],
    description: [
      "Takes input trades of various stocks at differing prices over time to complete trades for matching buy and sell orders",
      "Tracks buy and sell orders of stocks to provide median selling price of each stock at each timestamp",
      "Uses a streaming algorithm to report optimal buying and selling times of each stock to maximize profit",
    ],
  },
  {
    name: "Optimized Combination Function",
    languages: ["Assembly"],
    description: [
      "Designed a program in assembly for the combination function, writing implementations for both recursion with a custom call stack and a bottom up dynamic programming approach with iterators",
      "Further optimized bottom up approach to reduce memory usage by 50% and instruction calls by 80%, resulting in the 4th fastest algorithm out of 600 students and presented my solution and design approach to a lecture of 30 students",
    ],
  },
  {
    name: "Pipelined and Single Staged LC-2K Simulator, Compiler, and Linker",
    languages: ["C", "Assembly"],
    description: [
      "Compiles multiple LC-2K Assembly code files into separate ELF object files, which are then linked into a single object file",
      "Machine code is executed in a Single Cycle Datapath, running 1 instruction each cycle, or in a Pipeline Datapath, running up to 5 instructions each cycle, with data forwarding of registers",
    ],
  },
  {
    name: "Graph Video Maker",
    languages: ["HTML", "CSS", "Javascript", "NodeJS", "Python"],
    description: [
      "Converts frames of video files into bezier curve lines on a graph, turning the video into a drawing on a graph",
      "Frontend website allows users to sign in with email verification, view community projects others have made, and create their own videos, rendered with the Desmos API, communicating with backend through REST API calls",
      "NodeJS server backend processes frames with FFMPEG, OpenCV, and Potrace, saved with AES encryption",
    ],
  },

  {
    name: "Magic the Gathering Simulator",
    languages: ["HTML", "CSS", "JavaScript"],
    description: [
      "Trading card game Magic the Gathering ran as a multiplayer web application",
      "Stack-based spell ordering and complex rules from the game fully implemented",
    ],
  },
  {
    name: "Minecraft Game",
    languages: ["C++", "OpenGL"],
    description: [
      "Minecraft made in C++ and OpenGL, world generation using Perlin noise algorithm",
      "Optimizations for performance including rendering only visible block faces and custom physics engine",
    ],
  },
];

function Projects() {
  return (
    <div className="projects">
      <h2>Projects</h2>
      <div className="project-items">{projects.map(ProjectItem)}</div>
    </div>
  );
}

export default Projects;

const ProjectItem = ({ name, languages, description, link }) => (
  <div className="project-item" key={name}>
    <div>
      <span>{name}</span>
      {languages.map((language) => (
        <span key={language} className="language">
          {language}
        </span>
      ))}
    </div>
    {link && (
      <a href={link} target="_blank">
        See it here!
      </a>
    )}
    <ul>
      {description.map((text) => (
        <li key={text}>{text}</li>
      ))}
    </ul>
  </div>
);
