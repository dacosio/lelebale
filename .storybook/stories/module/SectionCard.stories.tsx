import React from 'react';
import type { Meta, StoryObj } from "@storybook/react";
import SectionCard from "../../../src/components/module/SectionCard";
import Container from "../../components/Container";
import Wrapper from "../../components/Wrapper";

const meta: Meta<typeof SectionCard> = {
  title: "Module/SectionCard",
  component: SectionCard,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
