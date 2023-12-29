import { IconType } from "react-icons";

export interface SectionCardProps {
  title: string;
  description: string;
  lists?: {
    label: string;
    icon?: IconType;
  }[];
  order?: boolean;
  src: string;
  seeMore?: string;
  map?: boolean;
}
