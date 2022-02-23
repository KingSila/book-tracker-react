import React from "react";
import { StyledHeader, Nav, Logo } from "./styles/Header.styled";
import { Container } from "./styles/Container.styled";

import { Flex } from "./styles/Flex.styled";

export const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <Flex>
          <Nav>
            <Logo src="/images/logo.svg" alt="" />
            <h1>Book Tracking System</h1>
          </Nav>
        </Flex>
      </Container>
    </StyledHeader>
  );
};
