import React from 'react';
import type { Meta, StoryObj } from "@storybook/react";
import ListItem from "../../../src/components/base/ListItem";
import Container from "../../components/Container";
import Wrapper from "../../components/Wrapper";

const meta: Meta<typeof ListItem> = {
  title: "Base/ListItem",
  component: ListItem,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
