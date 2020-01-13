import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";


const FooterContainer = styled.footer`
  display: grid;
  padding: 0;
  min-height: 10vh;
  padding: 0rem 0rem;
  background-color: var(--green);
  width: 100%;
`;

const FooterLayout = styled.div`
  display: grid;
  padding: 0.2rem 0.3rem;
`;

const FooterContent = styled.div`
    display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  justify-items: center;
  justify-content: center;
  align-items: center;
  align-content: center;
  padding: 0.2rem 0.3rem;
  @media all and (max-width: 480px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
  }
`;

const FooterLink = styled.a`
  background: hsla(24, 90%, 60%, 1);
  color: white;
  font-weight: 700;
  font-size: 1.1rem;
  padding: 0.1rem 0.5rem;
  margin: 0rem;
  text-align: left;
  text-decoration: none;
  border-radius: 1rem;
`;

const StyledLink = styled(NavLink)`
  background: hsla(24, 90%, 60%, 1);
  color: white;
  font-weight: 700;
  font-size: 1.1rem;
  padding: 0.1rem 0.5rem;
  margin: 0rem;
  text-align: left;
  text-decoration: none;
  border-radius: 1rem;
`;

const Footer = props => (
  <FooterContainer>
    <FooterLayout>
      <FooterContent>
        <StyledLink to="/">
          Zdravá strava
        </StyledLink>
        <FooterLink href="mailto:andrewtomanek@gmail.com">
          Kontakt
        </FooterLink>
      </FooterContent>
    </FooterLayout>
  </FooterContainer>
);

export default Footer;
