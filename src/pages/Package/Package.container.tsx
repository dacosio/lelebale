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

  const generatedProps = {
    // generated props here
    packageOptions,
    selectedOption,
    setSelectedOption,
  };
  return <PackageView {...generatedProps} />;
};

export default Package;
