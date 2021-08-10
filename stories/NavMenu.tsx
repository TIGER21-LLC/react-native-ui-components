import React from "react";
import "./navmenu.css"; // TODO

import { NavItem } from "./NavItem";

interface NavMenuProps {
  menuItems: [];
}

/**
 * TODO nav menu documentation
 */
export const NavMenu = ({ menuItems, ...props }: NavMenuProps) => {
  const navMenuArr = menuItems.map((menuItem) => {
    return (
      <NavItem
        icon={menuItem.icon}
        action={menuItem.action}
        actionDetails={menuItem.actionDetails}
      />
    );

    // url?: string;
  });

  return (
    <div className="navmenu">
      <div className="navmenu-content">{navMenuArr}</div>
    </div>
  );
};
