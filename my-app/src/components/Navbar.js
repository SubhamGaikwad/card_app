import React from "react";
import styled from "styled-components";

const Nav = styled.nav`
  background-color: #333;
  padding: 1rem;
  color: #fff;
`;

const BrandName = styled.h1`
  margin: 0;
`;

const Button = styled.button`
  background-color: #fff;
  color: #333;
  padding: 0.5rem 1rem;
  border: none;
  cursor: pointer;
  margin-left: 0.2rem;
`;

const Navbar = ({ onClick }) => {
  return (
    <Nav>
      <BrandName>Meshu</BrandName>
      <Button onClick={onClick}>Get Users</Button>
    </Nav>
  );
};

export default Navbar;
