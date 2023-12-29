import React from "react";
import { SectionCardProps } from "./SectionCard.props";
import {
  Container,
  Wrapper,
  Left,
  Right,
  StoryImage,
  Hr,
  List,
} from "./SectionCard.style";
import Title from "../../base/Title";
import Typography from "components/base/Typography";
import OurStoryImg from "../../../images/ourStory.jpg";

const SectionCard = (props: SectionCardProps): JSX.Element => {
  const { title } = props;
  return (
    <Container>
      <Title title={title} />
      <Wrapper>
        <Left>
          <Typography variant="body" style={{ marginBottom: "3rem" }}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti
            exercitationem neque hic nobis vitae quas earum ducimus laboriosam
            saepe voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Dicta porro placeat voluptatibus doloremque dignissimos
            blanditiis rem, ratione molestias ullam voluptate beatae qui, soluta
            reprehenderit ipsum alias harum ab quis libero?
          </Typography>
          <List>
            <Typography variant="list">Lorem, ipsum.</Typography>
            <Hr />
          </List>
          <List>
            <Typography variant="list">Lorem, ipsum.</Typography>
            <Hr />
          </List>
          <List>
            <Typography variant="list">Lorem, ipsum.</Typography>
            <Hr />
          </List>
          <List>
            <Typography variant="list">Lorem, ipsum.</Typography>
            <hr
              style={{
                border: 0,
                height: "1px",
                background: "black",
                marginTop: "1rem",
              }}
            />
          </List>
        </Left>
        <Right>
          <StoryImage alt="story" src={OurStoryImg} />
        </Right>
      </Wrapper>
    </Container>
  );
};

export default React.memo(SectionCard);
