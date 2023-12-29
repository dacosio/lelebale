import React from 'react';
import type { Meta, StoryObj } from "@storybook/react";
import Carousel from "../../../src/components/module/Carousel";
import Container from "../../components/Container";
import Wrapper from "../../components/Wrapper";

const meta: Meta<typeof Carousel> = {
  title: "Module/Carousel",
  component: Carousel,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
