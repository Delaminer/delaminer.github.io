import "./style/experience.css";

const experience = [
  {
    type: "University of Michigan",
    name: "Instructional Aide (IA) for Computer Organization (EECS 370)",
    location: "Ann Arbor, MI",
    time: "Aug. 2022 - Current",
    description: [],
  },
  {
    type: "Internship",
    name: "Nokia - Deepfield",
    location: "Ann Arbor, MI",
    title: "Frontend Software Engineering Intern",
    time: "June - Aug. 2022",
    description: [
      "Created new management software for users and permissions groups using React, allowing migration from existing legacy software while removing cross site scripting (XSS) vulnerabilities and improving UX consistency",
      "Modified backend software to allow user models to be a part of multiple permissions groups, allowing for more customizable permissions control implemented in new management software",
      "Designed new UI components with documentation to create consistent control over nested data structures",
    ],
  },
  {
    type: "Internship",
    name: "Intrepid Control Systems",
    location: "Remote",
    title: "Software Intern",
    time: "Jan. - Apr. 2022",
    description: [
      "Converted client-side UI of WiVi (Wireless communication device) control to a Single Page Application (SPA) style, eliminating refreshes between pages",
      "Refactored React codebase to memoize functions and components to improve website performance",
      "Utilized Redux to store previous user actions, eliminating repeated API calls to the database",
    ],
  },
  {
    type: "Extracurricular",
    name: "Michigan Mars Rover Team, Navigation Subteam",
    time: "Sep. 2021 - Current",
    description: [
      "Developed an algorithm to use sensor data on the left and right edges of obstacles in order to avoid them",
      "Improved simulator of rover to detect left and right edges of obstacles, allowing more accurate testing of the rover",
      "Worked with a team of 5 students to develop a navigation algorithm to drive through gates using AR location tags",
    ],
  },
  {
    type: "Extracurricular",
    name: "University of Michigan ICPC Competitive Programming Team",
    time: "Oct. 2021 - Current",
    description: [
      "Competed individually in the 2021 North American Qualifier Programming Contest, placing in the top 20",
      "Worked with in a team of 3 students to compete in the East Central North America regional programming competition",
    ],
  },
  {
    type: "Competition",
    name: "Ross Business +Tech Innovation Jam",
    time: "Oct. - Nov. 2021",
    description: [
      "Worked in a cohort of 4 students from the Ross School of Business, School of Information, and College of Engineering to develop a product and prototype application designed to connect retired people after the pandemic",
      "Team placed in top 5 out of 44 teams, presented our pitch to a panel of judges and audience for critique",
    ],
  },
];

function Experience() {
  return (
    <div className="experience">
      <h2>Experience</h2>
      <div className="experience-items">{experience.map(ExperienceItem)}</div>
    </div>
  );
}

export default Experience;

const ExperienceItem = ({ type, name, location, title, time, description }) => (
  <div className="experience-item" key={name}>
    <div>
      <span className="type">{type}</span>
      <span className="name">{name}</span>
      {location && <span className="location">{location}</span>}
    </div>
    {title && (
      <div className="title">
        <i>{title}</i>
      </div>
    )}
    {time && <div className="time">{time}</div>}
    <ul>
      {description.map((text) => (
        <li key={text}>{text}</li>
      ))}
    </ul>
  </div>
);
