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
  ListIcon,
} from "./SectionCard.style";
import Title from "../../base/Title";
import Typography from "components/base/Typography";

const SectionCard = (props: SectionCardProps): JSX.Element => {
  const { title, description, lists, order, src } = props;
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
          controls.start({ opacity: 0.3, y: 50 });
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
        initial={{ opacity: 0.3, y: 50 }}
        animate={controls}
        transition={{ duration: 0.5 }}>
        <Title title={title} />
        <Wrapper order={order}>
          <Left style={order ? { order: 1 } : { order: 0 }}>
            <Typography variant="body" style={{ marginBottom: "3rem" }}>
              {description}
            </Typography>
            {lists &&
              lists.map((item, index) => (
                <>
                  <List key={index}>
                    {item.icon && <ListIcon as={item.icon} />}
                    <Typography variant="list">{item.label}</Typography>
                  </List>
                  {index < lists.length - 1 && <Hr />}
                </>
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
          <Right style={order ? { order: 0 } : { order: 1 }}>
            <StoryImage alt="story" src={src} />
          </Right>
        </Wrapper>
      </motion.div>
    </Container>
  );
};

export default React.memo(SectionCard);
