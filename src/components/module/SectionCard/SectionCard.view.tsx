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
  SeeMore,
} from "./SectionCard.style";
import Title from "../../base/Title";
import Typography from "components/base/Typography";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import Map from "../Map";
const SectionCard = (props: SectionCardProps): JSX.Element => {
  const { title, description, lists, order, src, seeMore, map } = props;
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

            {seeMore && (
              <SeeMore>
                <Typography variant="subtitle1" className="underline">
                  {map ? (
                    <a
                      href="https://www.google.com/maps/dir//villa+dolores+mexico+pampanga/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x3396f1e4029dc7a7:0x909cf2826c4ff5e8?sa=X&ved=2ahUKEwiKzM6inbSDAxVxHzQIHRjLDF0Q9Rd6BAgyEAA"
                      target="_blank"
                      style={{ textDecoration: "none", color: "black" }}>
                      {seeMore}
                    </a>
                  ) : (
                    seeMore
                  )}
                </Typography>
                <HiOutlineArrowLongRight size={30} />
              </SeeMore>
            )}
          </Left>
          <Right style={order ? { order: 0 } : { order: 1 }}>
            {map ? <Map /> : <StoryImage alt={title} src={src} />}
          </Right>
        </Wrapper>
      </motion.div>
    </Container>
  );
};

export default React.memo(SectionCard);
