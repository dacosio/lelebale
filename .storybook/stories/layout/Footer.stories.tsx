import React from 'react';
import type { Meta, StoryObj } from "@storybook/react";
import Footer from "../../../src/components/layout/Footer";
import Container from "../../components/Container";
import Wrapper from "../../components/Wrapper";

const meta: Meta<typeof Footer> = {
  title: "Layout/Footer",
  component: Footer,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
