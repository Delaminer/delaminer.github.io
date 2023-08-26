import {
  AiFillLinkedin,
  AiFillGithub,
  AiOutlineGlobal,
  AiFillPhone,
  AiOutlineMail,
} from "react-icons/ai";
import { BiCurrentLocation } from "react-icons/bi";
import "./style/contact.css";

function Contact() {
  return (
    <div className="contact">
      <h2>Feel free to contact me!</h2>
      <div className="icons">
        {[
          {
            title: "Phone",
            subtitle: "(517) 294-4779",
            icon: <AiFillPhone size={25} />,
          },
          {
            title: "Email",
            subtitle: "alexdela@umich.edu",
            link: "mailto:alexdela@umich.edu",
            icon: <AiOutlineMail size={25} />,
          },
          {
            title: "LinkedIn",
            subtitle: "linkedin.com/in/alex-de-la-iglesia",
            link: "https://www.linkedin.com/in/alex-de-la-iglesia/",
            icon: <AiFillLinkedin size={25} />,
          },
          {
            title: "GitHub",
            subtitle: "github.com/delaminer",
            link: "http://github.com/delaminer",
            icon: <AiFillGithub size={25} />,
          },
          {
            title: "Website",
            subtitle: "alexanderdelaiglesia.com",
            link: "http://alexanderdelaiglesia.com/",
            icon: <AiOutlineGlobal size={25} />,
          },
          // {
          //   title: "Howell, MI",
          //   icon: <BiCurrentLocation size={25} />,
          // },
        ].map(ContactIcon)}
      </div>
    </div>
  );
}

export default Contact;

const ContactIcon = ({ title, subtitle, link, icon }) => {
  return (
    <div className="contact-icon" key={title}>
      {icon}
      <div className="contact-title">{title}</div>
      {subtitle &&
        (link ? (
          <a className="contact-subtitle" href={link} target="_blank">
            {subtitle}
          </a>
        ) : (
          <div className="contact-subtitle">{subtitle}</div>
        ))}
    </div>
  );
};
