import React from "react";
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinkItems,
  FooterLinksWrapper,
  FooterLink,
  FooterLinkTitle,
} from "./FooterElement";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle> </FooterLinkTitle>
              <FooterLink to="about">About Us</FooterLink>
              <FooterLink to="portfolio">Portfolio</FooterLink>
              <FooterLink to="services">Services</FooterLink>
              <FooterLink to="?">Contact Us</FooterLink>
              <FooterLink to="?">Terms Of Service</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
