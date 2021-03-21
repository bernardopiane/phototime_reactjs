import React from "react";
import styled from "styled-components";
import img from "../media/Livello 4.png";

const Wrapper = styled.section`
  padding-top: 2em;
  padding-bottom: 2em;
  color: #373737;
`;

const Divider = styled.div`
  margin-left: 1em;
  margin-right: 1em;
  border: 1px solid #16a085;
`;

const Link = styled.a`
  color: #373737;
  :hover {
    text-decoration: none;
    color: #6b6b6b;
  }
`;

export default function Footer() {
  return (
    <Wrapper>
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex flex-column">
            <div className="d-flex py-2">
              <Link href="#!">Credits</Link>
              <Divider />
              <Link href="#!">Privacy</Link>
              <Divider />
              <Link href="#!">Our team</Link>
            </div>
            <div className="py-2">
              Copyright by phototime - all rights reserved
            </div>
          </div>
          <div>
            <img src={img} alt="" className="img-fluid" />
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
