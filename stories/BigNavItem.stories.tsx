import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { BigNavItem } from "./BigNavItem";

export default {
  title: "Tiger21/BigNavItem",
  component: BigNavItem,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof BigNavItem>;

const Template: ComponentStory<typeof BigNavItem> = (args) => (
  <BigNavItem {...args} />
);

export const Search = Template.bind({});
Search.args = {
  icon: "account-search",
  label: "Search", //  Member Directory
};

export const Connect = Template.bind({});
Connect.args = {
  icon: "account-group",
  label: "Connect", // With My Group
};
