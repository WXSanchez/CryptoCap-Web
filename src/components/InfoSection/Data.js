import Icon1 from "../../images/svg-1.svg";
import Icon2 from "../../images/svg-2.svg";

export const homeObjOne = {
  id: "about",
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: "A NFT project for the people",
  headline: "Check out our mint page below",
  description: "Mint a CryptoCap, support a community, and get a sick hat",
  buttonLabel: "Mint",
  imgStart: false,
  img: Icon1,
  alt: "Svg-1",
  dark: true,
  primary: true,
  darkText: false,
  buttonLink: `/mint`,
};

export const homeObjTwo = {
  id: "portfolio",
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: "A free discord for all interested",
  headline: "Join our community",
  description:
    "Here you can talk to community members, staff, and founders as well as stay up to date on the project",
  buttonLabel: "Discord",
  imgStart: true,
  img: Icon2,
  alt: "Svg-2",
  dark: false,
  primary: false,
  darkText: true,
  buttonLink: `/discord`,
};
