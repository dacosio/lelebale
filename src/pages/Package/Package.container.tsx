import React, { useState } from "react";

import PackageView from "./Package.view";

const Package = (): JSX.Element => {
  const packageOptions = [
    "package oh",
    "package oh+la",
    "package a",
    "package b",
    "package c",
  ];

  const [selectedOption, setSelectedOption] = useState(packageOptions[0]);

  const [isOpenDrawer, setIsOpenDrawer] = useState<boolean>(false);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  const generatedProps = {
    // generated props here
    packageOptions,
    selectedOption,
    setSelectedOption,
    isOpenDrawer,
    setIsOpenDrawer,
    isModalVisible,
  };
  return <PackageView {...generatedProps} />;
};

export default Package;
