import React, { useState } from "react";
import Video from "../../video/video.mp4";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
} from "./HeroElement";
import { Button } from "../ButtonElement";

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };
  return (
    <>
      <HeroContainer>
        <HeroBg>
          <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
        </HeroBg>
        <HeroContent>
          <HeroH1>Dope Caps and a Dope Cause</HeroH1>
          <HeroP>Stay tuned for the official launch date and whitepaper</HeroP>
          {/* <HeroBtnWrapper>
            <Button
              to="home"
              onMouseEnter={onHover}
              onMouseLeave={onHover}
              primary="true"
              dark="true"
            >
              Sign Up! {hover ? <ArrowForward /> : <ArrowRight />}
            </Button>
          </HeroBtnWrapper> */}
        </HeroContent>
      </HeroContainer>
    </>
  );
};

export default HeroSection;
