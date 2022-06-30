import React from "react";
import Icon1 from "../../images/svg-1.svg";
import Icon2 from "../../images/svg-4.svg";
import Icon3 from "../../images/svg-3.svg";
import {
  ServicesContainer,
  ServicesCard,
  ServicesH1,
  ServicesH2,
  ServicesIcon,
  ServicesP,
  ServicesWrapper,
} from "./ServicesElement";

const Services = () => {
  return (
    <>
      <ServicesContainer id="services">
        <ServicesH1>Our Core Values</ServicesH1>
        <ServicesWrapper>
          <ServicesCard>
            <ServicesIcon src={Icon1} />
            <ServicesH2>Charity</ServicesH2>
            <ServicesP>
              We will donate 30% of all NFT proceeds to a local charity in the
              area of that project
            </ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={Icon2} />
            <ServicesH2>Transparency</ServicesH2>
            <ServicesP>
              We strive to clue our holders in to what we are doing and why we
              are doing it
            </ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={Icon3} />
            <ServicesH2>Real World Value</ServicesH2>
            <ServicesP>
              It is essential that our project provides real value not only to
              holders but the people we to help
            </ServicesP>
          </ServicesCard>
        </ServicesWrapper>
      </ServicesContainer>
    </>
  );
};

export default Services;
