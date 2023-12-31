export interface SegmentedControlProps {
  options: string[];
  selectedOption: string | number;
  onClickControl: (newValue: string) => void;
}
