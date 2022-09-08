import React from "react";
import { NavLink } from "react-router-dom";
import "./style/sidebar.css";

function Sidebar({ children, separate }) {
  const [expanded, setExpanded] = React.useState(false);

  return (
    <div className="sidebar-context">
      <div className="sidebar">
        {[
          { name: "Home", to: "" },
          { name: "Experience", to: "experience" },
          { name: "Projects", to: "projects" },
          { name: "Contact", to: "contact" },
        ].map(SidebarItem)}
      </div>
      <div className="content">{children}</div>
    </div>
  );
}

export default Sidebar;

const SidebarItem = ({ name, to, separate }) => {
  return separate ? (
    <NavLink
      to={`/${to}`}
      key={name}
      className={({ isActive }) => (isActive ? "active" : "")}
    >
      {name}
    </NavLink>
  ) : (
    <a key={name} href={`#${to}`}>
      {name}
    </a>
  );
};
