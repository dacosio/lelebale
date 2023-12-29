import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Title from "../../../src/components/base/Title";
import Container from "../../components/Container";
import Wrapper from "../../components/Wrapper";

const meta: Meta<typeof Title> = {
  title: "Base/Title",
  component: () => {
    return (
      <Container>
        <Title title="OUR STORY" />;
      </Container>
    );
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
