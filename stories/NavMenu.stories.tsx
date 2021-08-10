import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { NavMenu } from "./NavMenu";

export default {
  title: "Tiger21/NavMenu",
  component: NavMenu,
} as ComponentMeta<typeof NavMenu>;

const Template: ComponentStory<typeof NavMenu> = (args) => (
  <NavMenu {...args} />
);

export const Default = Template.bind({});
Default.args = {
  menuItems: [
    {
      icon: "magnifier",
      action: "Search",
      actionDetails: "Member Directory",
      url: "https://google.com/todo",
    },
    {
      icon: "people",
      action: "Connect",
      actionDetails: "with My Group",
      url: "https://google.com/todo",
    },
    {
      icon: "bubbles",
      action: "Discuss",
      actionDetails: "in Networks",
      url: "https://google.com/todo",
    },
    {
      icon: "event",
      action: "Explore",
      actionDetails: "Events",
      url: "https://google.com/todo",
    },
    {
      icon: "control-play",
      action: "Watch",
      actionDetails: "Recordings",
      url: "https://google.com/todo",
    },
    {
      icon: "notebook",
      action: "Find",
      actionDetails: "Resources",
      url: "https://google.com/todo",
    },
    {
      icon: "star",
      action: "Access",
      actionDetails: "Partners",
      url: "https://google.com/todo",
    },
    {
      icon: "question",
      action: "Support",
      actionDetails: "and FAQs",
      url: "https://google.com/todo",
    },
  ],
};
