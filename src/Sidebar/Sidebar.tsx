import React, { useState } from "react";

import {
  faHome,
  faHomeUser,
  faCircleChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./sidebar.css";
import { Link } from "react-router-dom";

function Sidebar() {
  const sidebarCollapsed = localStorage.getItem("sidebar-collpsed");
  const [isExpanded, setIsExpanded] = useState(sidebarCollapsed ? false : true);

  const handleToggler = () => {
    if (isExpanded) {
      setIsExpanded(false);
      localStorage.setItem("sidebar-collpsed", "true");
      return;
    }

    setIsExpanded(true);
    localStorage.removeItem("sidebar-collpsed");
  };

  return (
    <div className={isExpanded ? "sidebar" : "sidebar sidebar--collapsed"}>
      <div>
        <span className="sidebar__btn" onClick={handleToggler}>
          <FontAwesomeIcon icon={faCircleChevronLeft} />
        </span>
      </div>
      <div className="sidebar__items">
        <div className="sidebar__item">
          <Link to="/">
            <span
              className="sidebar__item-icon"
              {...(isExpanded ? null : { title: "Page 1" })}
            >
              <FontAwesomeIcon icon={faHome} />
            </span>
            <span className="sidebar__item-txt">Page 1</span>
          </Link>
        </div>
        <div className="sidebar__item">
          <Link to="/page_2">
            <span
              className="sidebar__item-icon"
              {...(isExpanded ? null : { title: "Page 2" })}
            >
              <FontAwesomeIcon icon={faHomeUser} />
            </span>
            <span className="sidebar__item-txt">Page 2</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
