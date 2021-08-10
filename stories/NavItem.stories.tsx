import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { NavItem } from "./NavItem";

export default {
  title: "Tiger21/NavItem",
  component: NavItem,
} as ComponentMeta<typeof NavItem>;

const Template: ComponentStory<typeof NavItem> = (args) => (
  <NavItem {...args} />
);

export const Single = Template.bind({});
Single.args = {
  icon: "magnifier",
  action: "Search",
  actionDetails: "Member Directory",
  url: "https://google.com/todo",
};
