import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Button from "../../../src/components/base/Button";
import Container from "../../components/Container";
import Wrapper from "../../components/Wrapper";

const meta: Meta<typeof Button> = {
  title: "Base/Button",
  component: () => {
    return (
      <Container background="white">
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          <div style={{ marginRight: "20px", marginBottom: "30px" }}>
            <Button variant="dark" text="Book Now" />
          </div>
          <div style={{ marginRight: "20px", marginBottom: "30px" }}>
            <Button variant="light" text="Book Now" />
          </div>
        </div>
      </Container>
    );
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
