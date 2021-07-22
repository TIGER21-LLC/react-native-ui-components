import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { BigNavMenu } from "./BigNavMenu";

export default {
  title: "Tiger21/BigNavMenu",
  component: BigNavMenu,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof BigNavMenu>;

const Template: ComponentStory<typeof BigNavMenu> = (args) => (
  <BigNavMenu {...args} />
);

export const Default = Template.bind({});
Default.args = {
  menuItems: [
    {
      icon: "account-search",
      label: "search",
    },
    {
      icon: "account-group-outline",
      label: "connect",
    },
    {
      icon: "message-text-outline",
      label: "discuss",
    },
    {
      icon: "calendar-search",
      label: "explore",
    },
    {
      icon: "play-box-outline",
      label: "watch",
    },
    {
      icon: "book-open-variant",
      label: "find",
    },
    {
      icon: "bullseye-arrow",
      label: "access",
    },
    {
      icon: "phone-in-talk-outline",
      label: "support",
    },
  ],
};
// Default.args = {
//   menuItems: ["aaa", "bbb", "ccc", "ddd", "eee"],
// };
