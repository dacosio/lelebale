import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";

import Typography from "../../../src/components/base/Typography";
import Container from "../../components/Container";
import Wrapper from "../../components/Wrapper";

const meta: Meta = {
  title: "Base/Typography",
  component: () => {
    return (
      <Container
        background="white"
        style={{ display: "flex", flexDirection: "column" }}>
        <Wrapper>
          <Typography variant="title1">title1</Typography>
          <Typography variant="title2">title2</Typography>
          <Typography variant="subtitle1">subtitle1</Typography>
          <Typography variant="body">body</Typography>
          <Typography variant="list">list</Typography>
        </Wrapper>
      </Container>
    );
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Text: Story = {};
