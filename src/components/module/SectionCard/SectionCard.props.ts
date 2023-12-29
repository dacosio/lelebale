export interface SectionCardProps {
  title: string;
  description: string;
  lists: {
    label: string;
    icon?: string;
  }[];
  order?: boolean;
  src: string;
}
