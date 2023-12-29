import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
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
  const { title, description, lists } = props;
  const controls = useAnimation();
  const sectionCardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionCardRef.current) {
        const scrollY = window.scrollY || window.pageYOffset;
        const sectionCardTop = 40;

        if (scrollY > sectionCardTop) {
          controls.start({ opacity: 1, y: 0 });
        } else {
          controls.start({ opacity: 0, y: 50 });
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [controls]);

  return (
    <Container ref={sectionCardRef}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={controls}
        transition={{ duration: 0.4 }}>
        <Title title={title} />
        <Wrapper>
          <Left>
            <Typography variant="body" style={{ marginBottom: "3rem" }}>
              {description}
            </Typography>
            {lists &&
              lists.map((item, index) => (
                <List key={index}>
                  <Typography variant="list">{item}</Typography>
                  {index < lists.length - 1 && <Hr />}
                </List>
              ))}
            <hr
              style={{
                border: 0,
                height: "1px",
                background: "black",
                marginTop: "1rem",
              }}
            />
          </Left>
          <Right>
            <StoryImage alt="story" src={OurStoryImg} />
          </Right>
        </Wrapper>
      </motion.div>
    </Container>
  );
};

export default React.memo(SectionCard);
