import { BsFillAwardFill } from "react-icons/bs";
import "./style/coursework.css";

const courses = [
  {
    department: "CS Courses",
    classes: [
      {
        code: "EECS 477",
        name: "Algorithms",
        grade: "In Progress",
      },
      {
        code: "EECS 445",
        name: "Machine Learning",
        grade: "In Progress",
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
        code: "MATH 425",
        name: "Probability",
        grade: "In Progress",
      },
      {
        code: "MATH 216",
        name: "Differential Equations",
        grade: "A",
      },
      {
        code: "Math 215",
        name: "Vector Calculus",
        grade: "A,",
      },
      {
        code: "Math 214",
        name: "Linear Algebra",
        grade: "A",
      },
    ],
  },
];

function Coursework() {
  return (
    <div className="coursework">
      <h2>Course Work</h2>
      <p>
        <b>
          <i>
            Bachelor of Science Engineering in Computer Science, Minor in
            Mathematics
          </i>
          <span> at the </span>
          University of Michigan
        </b>
      </p>
      <p>
        Overall GPA: <b>4.0 / 4.0</b>
      </p>
      <p>
        <span className="award">
          <BsFillAwardFill /> 2021
        </span>
        Awarded the William J. Branstrom Freshman Prize (given to the upper five
        percent of first year undergraduates)
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
    <ul>{classes.map(CourseItem)}</ul>
  </div>
);

const CourseItem = ({ code, name, grade }) => (
  <li className="course-item" key={code}>
    <span className="code">{code}</span>
    <span className="name">{name}</span>
    <span className="grade">{grade}</span>
  </li>
);
