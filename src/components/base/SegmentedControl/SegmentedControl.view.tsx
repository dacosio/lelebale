import React from "react";
import { SegmentedControlProps } from "./SegmentedControl.props";
import { Container, Wrapper } from "./SegmentedControl.style";
import Typography from "../Typography";
import Button from "../Button";

const SegmentedControl = (props: SegmentedControlProps): JSX.Element => {
  const { options, selectedOption, onClickControl } = props;

  return (
    <>
      {options.map((option) => {
        return (
          <div key={option}>
            <Button
              text={option}
              variant={option === selectedOption ? "dark" : "light"}
              size="sm"
              onClick={() => onClickControl(option)}
              hover={false}
              takeFullWidth
              className="segment-btn"
            />
          </div>
        );
      })}
    </>
  );
};

export default React.memo(SegmentedControl);
