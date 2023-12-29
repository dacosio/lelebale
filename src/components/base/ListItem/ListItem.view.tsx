import React from "react";
import { ListItemProps } from "./ListItem.props";
import { Container } from "./ListItem.style";
import { motion } from "framer-motion";

const ListItem = (props: ListItemProps): JSX.Element => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}>
      {props.item}
    </motion.div>
  );
};

export default React.memo(ListItem);
