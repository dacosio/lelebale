import React from 'react';
import type { Meta, StoryObj } from "@storybook/react";
import HouseRules from "../../../src/components/base/HouseRules";
import Container from "../../components/Container";
import Wrapper from "../../components/Wrapper";

const meta: Meta<typeof HouseRules> = {
  title: "Base/HouseRules",
  component: HouseRules,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
