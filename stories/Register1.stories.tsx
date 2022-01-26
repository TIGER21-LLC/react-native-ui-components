import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Register1 } from "./Register1";

export default {
  title: "Tiger21/Register1",
  component: Register1,
} as ComponentMeta<typeof Register1>;

const Template: ComponentStory<typeof Register1> = (args) => (
  <Register1 {...args} />
);

export const Default = Template.bind({});
Default.args = {};
