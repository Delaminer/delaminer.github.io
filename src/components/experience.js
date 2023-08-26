import "./style/experience.css";

const experience = [
  {
    type: "Internship",
    name: "Stripe",
    location: "San Francsisco, CA",
    title: "Software Engineering Intern",
    time: "May - August 2023",
    description: [
      "Developed Style Guide Checking tool with LLM integration for internal documentation, validated by technical writer feedback",
      "Developed feature to generate summaries on edits made to internal documentation with LLMs, being used in over half of all new edits made by Stripe employees",
      "Lead LLM usage in production software by designing infrastructure for its use, developing rigorous testing framework to validate prompt effectiveness, and guiding team members to use LLMs effectively",
    ],
  },
  {
    type: "Internship",
    name: "Nokia - Deepfield",
    location: "Ann Arbor, MI",
    title: "Software Engineering Intern",
    time: "June - August 2022",
    description: [
      "Created new management software for users and permissions groups using React, allowing migration from existing legacy software while removing cross site scripting (XSS) vulnerabilities and improving UX consistency",
      "Modified backend software to allow user models to be a part of multiple permissions groups, allowing for more customizable permissions control implemented in new management software",
      "Designed new UI components with documentation to create consistent control over nested data structures",
    ],
  },
  {
    type: "Research",
    name: "SLED Research Lab",
    location: "Ann Arbor, MI",
    title: "Research Assistant",
    time: "September 2022 - Present",
    description: [
      "Conducted research on using Machine Learning and Fuzzy Logic for various applications classifying various brain wave states: blink detection, alpha and gamma wave detection, emotion state detection, and P300 motor reflex detection",
      "Performed experiments on subjects using an EEG dry electrode cap to detect brain wave states during different stimuli",
      "Lead a reading group of 6 researchers and met with professors to learn new ML methods for interpreting our data",
      "Developed ML model resulting in 94.7% accuracy identifying anger in patients using a multi-layer perceptron classifier"
    ],
  },
  {
    type: "Research",
    name: "Myelin Tech Space LLC",
    location: "Ann Arbor, MI",
    title: "Machine Learning Researcher",
    time: "April - June 2023",
    description: [
      "Conducted research on using Machine Learning and Fuzzy Logic for various applications classifying various brain wave states: blink detection, alpha and gamma wave detection, emotion state detection, and P300 motor reflex detection",
      "Performed experiments on subjects using an EEG dry electrode cap to detect brain wave states during different stimuli",
      "Lead a reading group of 6 researchers and met with professors to learn new ML methods for interpreting our data",
      "Developed ML model resulting in 94.7% accuracy identifying anger in patients using a multi-layer perceptron classifier"
    ],
  },
  {
    type: "University of Michigan",
    name: "Instructional Aide (IA) for Computer Organization (EECS 370) Fall 2022 and Machine Learning (EECS 445) Winter 2023 and Fall 2023",
    location: "Ann Arbor, MI",
    time: "August 2022 - Present",
    description: [
      "Exam Leader: Responsible for integrating exam questions, and working with instructors to create bug-free exams",
      "Grader Management: Created grading rubrics, and delegated 11 student graders to grade student assignments according to a strict deadline and administer regrade requests",
      "Leads a discussion section, teaching around 30 students additional material and clarifying issues",
      "Provides office hours to clarify issues over homework, project, and exam material for students"
    ],
  },
  {
    type: "Internship",
    name: "Intrepid Control Systems",
    location: "Remote",
    title: "Software Engineering Intern",
    time: "January - April 2022",
    description: [
      "Converted client-side UI of WiVi (Wireless communication device) control to a Single Page Application (SPA) style, eliminating refreshes between pages",
      "Refactored React codebase to memoize functions and components to improve website performance",
      "Utilized Redux to store previous user actions, eliminating repeated API calls to the database",
    ],
  },
  {
    type: "Extracurricular",
    name: "University of Michigan ICPC Competitive Programming Team",
    time: "October 2021 - Present",
    description: [
      "Competed individually in the 2021 North American Qualifier Programming Contest, placing in the top 20",
      "Worked with in a team of 3 students to compete in the East Central North America regional programming competition",
    ],
  },
  {
    type: "Extracurricular",
    name: "University of Michigan Autonomous Robotic Vehicle Team, Computer Vision Subteam",
    time: "August 2022 - May 2023",
    description: [
      "Developed Unity simulator of parking lot obstacle course for rendering lane-detection images for CNN training",
      "Designed CNN architecture for detecting lane-lines in camera feed"
    ],
  },
  {
    type: "Extracurricular",
    name: "Michigan Mars Rover Team, Navigation Subteam",
    time: "September 2021 - November 2022",
    description: [
      "Developed an algorithm to use sensor data on the left and right edges of obstacles in order to avoid them",
      "Improved simulator of rover to detect left and right edges of obstacles, allowing more accurate testing of the rover",
      "Worked with a team of 5 students to develop a navigation algorithm to drive through gates using AR location tags",
    ],
  },
  {
    type: "Competition",
    name: "Ross Business +Tech Innovation Jam",
    time: "October - November 2021",
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
