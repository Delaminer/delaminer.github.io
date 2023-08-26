import { BsFillAwardFill } from "react-icons/bs";
import "./style/coursework.css";

const courses = [
  {
    department: "Computer Science Courses",
    classes: [
      {
        code: "EECS 482",
        name: "Operating Systems",
        grade: "In Progress",
      },
      {
        code: "EECS 442",
        name: "Computer Vision",
        grade: "In Progress",
      },
      {
        code: "EECS 497",
        name: "Human-Centered Software Development",
        grade: "In Progress",
      },
      {
        code: "EECS 487",
        name: "Natural Language Processing",
        grade: "A",
      },
      {
        code: "EECS 388",
        name: "Computer Security",
        grade: "A+",
      },
      {
        code: "EECS 490",
        name: "Programming Languages",
        grade: "A",
      },
      {
        code: "EECS 477",
        name: "Algorithms",
        grade: "A+",
      },
      {
        code: "EECS 445",
        name: "Machine Learning",
        grade: "A-",
      },
      {
        code: "EECS 492",
        name: "Artificial Intelligence",
        grade: "A",
      },
      {
        code: "EECS 281",
        name: "Data Structures and Algorithms",
        grade: "A",
      },
      {
        code: "EECS 376",
        name: "Computational Theory",
        grade: "A+",
      },
      {
        code: "EECS 370",
        name: "Computer Organization",
        grade: "A+",
      },
      {
        code: "EECS 280",
        name: "Programming and Intro Data Structures",
        grade: "A",
      },
      {
        code: "EECS 203",
        name: "Discrete Math",
        grade: "A+",
      },
    ],
  },
  {
    department: "Math Courses",
    classes: [
      {
        code: "MATH 465",
        name: "Combinatorics",
        grade: "A+",
      },
      {
        code: "MATH 425",
        name: "Probability",
        grade: "A+",
      },
      {
        code: "MATH 216",
        name: "Differential Equations",
        grade: "A",
      },
      {
        code: "MATH 215",
        name: "Vector Calculus",
        grade: "A,",
      },
      {
        code: "MATH 214",
        name: "Linear Algebra",
        grade: "A",
      },
    ],
  },
];

function Coursework() {
  return (
    <div className="coursework">
      <h2>Coursework</h2>
      <p>
        <b>
          <i>
            Master of Science Engineering in Computer Science (intended)
          </i>
          <span> at the </span>
          University of Michigan (August 2024 - May 2025)
        </b>
      </p>
      <p>
        <b>
          <i>
            Bachelor of Science Engineering in Computer Science, Minor in
            Mathematics
          </i>
          <span> at the </span>
          University of Michigan (August 2021 - May 2024)
        </b>
      </p>
      <p>
        Overall GPA: <b>3.99 / 4.0</b>
      </p>
      <p>
        Professional Engineering Honor Societies: Member of Tau Beta Pi (TBP), Eta Kappa Nu (HKN) and IEEE
      </p>
      <p>
        <span className="award">
          <BsFillAwardFill /> 2021
        </span>
        <b>William J. Branstrom Freshman Prize</b> <i>(given to the upper five
        percent of first year undergraduates)</i>
      </p>
      <p>
        <span className="award">
          <BsFillAwardFill />
        </span>
        <b>James B. Angell Scholar</b> awarded for Fall 2021, Fall 2022, Winter 2022 <i>(given to students with all As)</i>
      </p>
      <div className="department-container">
        {courses.map(DepartmentSection)}
      </div>
    </div>
  );
}

export default Coursework;

const DepartmentSection = ({ department, classes }) => (
  <div key={department} class="department">
    <h4>{department}</h4>
      <ul>{classes.sort((a, b) => b.code.localeCompare(a.code)).map(CourseItem)}</ul>
  </div>
);

const CourseItem = ({ code, name, grade }) => (
  <li className="course-item" key={code}>
    <span className="code">{code}</span>
    <span className="name">{name}</span>
    <span className="grade">{grade}</span>
  </li>
);
