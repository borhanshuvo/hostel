import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="container pt-3">
      <div>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "nav-link text-dark sidebar-active"
              : "nav-link text-dark sidebar"
          }
          to="add-member"
        >
          Add Member
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "nav-link text-dark sidebar-active"
              : "nav-link text-dark sidebar"
          }
          to="manage-member"
        >
          Manage Member
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
