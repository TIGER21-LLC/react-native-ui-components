import React from "react";
import "./navitem.css";

import { SimpleLineIcons } from "@expo/vector-icons";

interface NavItemProps {
  icon?: string;
  action?: string;
  actionDetails?: string;
  url?: string;
}

/**
 * TODO nav item documentation
 */
export const NavItem = ({
  icon = "heart",
  action = "search",
  actionDetails = "member directory",
  url = "https://google.com/todo",
  ...props
}: NavItemProps) => {
  return (
    <div className="navitem">
      <div className="navitem-content">
        <div>
          <SimpleLineIcons name={icon} size={40} color="#BA9246" />
        </div>
        <div>
          <p className="action">{action}</p>
          <p className="action-details">{actionDetails}</p>
        </div>
      </div>
    </div>
  );
};
