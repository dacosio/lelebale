import React from 'react';
import type { Meta, StoryObj } from "@storybook/react";
import Amenities from "../../../src/components/module/Amenities";
import Container from "../../components/Container";
import Wrapper from "../../components/Wrapper";

const meta: Meta<typeof Amenities> = {
  title: "Module/Amenities",
  component: Amenities,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
