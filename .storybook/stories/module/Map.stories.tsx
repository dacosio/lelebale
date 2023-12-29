import React from 'react';
import type { Meta, StoryObj } from "@storybook/react";
import Map from "../../../src/components/module/Map";
import Container from "../../components/Container";
import Wrapper from "../../components/Wrapper";

const meta: Meta<typeof Map> = {
  title: "Module/Map",
  component: Map,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
