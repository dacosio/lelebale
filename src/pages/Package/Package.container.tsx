import React, { useEffect, useState } from "react";

import PackageView from "./Package.view";
import { useAppDispatch, useAppSelector } from "app/hooks";
import { selectPackage, storePackage } from "features/filter/filterSlice";
import { useMediaQuery } from "../../utils/hooks/useMediaQuery";

const Package = (): JSX.Element => {
  const packageOptions = [
    "package oh",
    "package oh+la",
    "package a",
    "package b",
    "package c",
  ];

  const dispath = useAppDispatch();

  const [selectedOption, setSelectedOption] = useState(packageOptions[0]);

  const [isOpenDrawer, setIsOpenDrawer] = useState<boolean>(false);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  const bundle = useAppSelector(selectPackage);

  useEffect(() => {
    dispath(storePackage(selectedOption));
  }, [selectedOption]);

  const matches = useMediaQuery("(max-width: 425px)");
  const houseRules = [
    "smoking inside the home is not allowed",
    "designated smoking area at the back",
    "pets are prohibited unless agreed to/upon in advance",
    "do not exceed designated amount of parking provided for free in the property",
    "fire extinguisher equipped and available for emergency us",
    "guests shall see to it that they lock their doors, windows & garage",
  ];

  const generatedProps = {
    // generated props here
    packageOptions,
    selectedOption,
    setSelectedOption,
    isOpenDrawer,
    setIsOpenDrawer,
    isModalVisible,
    bundle,
    matches,
    houseRules,
  };
  return <PackageView {...generatedProps} />;
};

export default Package;
