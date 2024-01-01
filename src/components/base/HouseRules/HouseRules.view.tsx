import React from "react";
import { HouseRulesProps } from "./HouseRules.props";
import { Container } from "./HouseRules.style";
import Typography from "../Typography";

const HouseRules = (props: HouseRulesProps): JSX.Element => {
  const { title, items } = props;
  return (
    <Container>
      <Typography variant="btn" style={{ paddingBottom: "1rem" }}>
        {title}
      </Typography>
      <ul style={{ paddingLeft: "1rem" }}>
        {items.map((item, index) => (
          <li style={{ listStyleType: "disc" }} key={index}>
            <Typography
              variant="small"
              style={{ listStylePosition: "inherit" }}>
              {item}
            </Typography>
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default React.memo(HouseRules);
