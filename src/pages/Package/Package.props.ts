import { Dispatch, SetStateAction } from "react";

export type Option = {
  value: string;
  label: string;
};

export interface PackageGeneratedProps {
  packageOptions: string[];
  selectedOption: string;
  setSelectedOption: Dispatch<SetStateAction<string>>;
  isOpenDrawer: boolean;
  setIsOpenDrawer: Dispatch<SetStateAction<boolean>>;
  isModalVisible: boolean;
  bundle: string;
  matches: boolean;
}
