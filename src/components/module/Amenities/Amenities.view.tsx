import React from "react";
import { AmenitiesProps } from "./Amenities.props";
import { Container, Icon } from "./Amenities.style";
import { HiOutlineWifi } from "react-icons/hi2";
import Typography from "components/base/Typography";

const Amenities = (props: AmenitiesProps): JSX.Element => {
  const { label, caption } = props;
  return (
    <Container>
      <Icon as={HiOutlineWifi} />
      <div>
        <Typography variant="small">{label}</Typography>
        <Typography variant="small" style={{ color: "#61605F" }}>
          {caption}
        </Typography>
      </div>
    </Container>
  );
};

export default React.memo(Amenities);
