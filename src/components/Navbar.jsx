import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(Link)`
  color: white;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 1rem;
  padding-top: 3em;
  padding-bottom: 3em;
  :hover {
    color: rgb(180, 180, 180);
    text-decoration: none;
  }
`;

const Wrapper = styled.div`
  background-color: ${(props) => props.bg || "transparent"};
`;

export default function Navbar({bg}) {
  return (
    <Wrapper bg={bg}>
      <div className="container">
        <div className="d-flex justify-content-around align-items-center">
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/">Photography</StyledLink>
          <StyledLink to="/">
            <img src="/media/icon.png" alt="" />
          </StyledLink>
          <StyledLink to="/">Design</StyledLink>
          <StyledLink to="/test">Download</StyledLink>
        </div>
      </div>
    </Wrapper>
  );
}
