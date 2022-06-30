import React, { useState } from "react";
import Navbar from "../components/MintNav";
import MintText from "../components/Mint";

const Mint = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Navbar toggle={toggle} />
      <MintText />
      {/* <Footer /> */}
    </>
  );
};

export default Mint;
