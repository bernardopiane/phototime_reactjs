import React from "react";
import styled from "styled-components";
import MyButton from "../components/MyButton";
import Navbar from "../components/Navbar";

const Wrapper = styled.div`
  background-image: url("/media/Livello 1.png");
  background-size: cover;
  background-position: center bottom;
  min-height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 2em;
`;

const Hero = styled.div`
  text-align: center;
  color: white;
`;

const HeroText = styled.h1`
  font-size: 3rem;
  letter-spacing: 0.25em;
  text-transform: uppercase;
`;

const Link = styled.a`
  transition: all 0.25s ease-in-out;
  :hover {
    filter: brightness(50%);
  }
`;

export default function First() {
  return (
    <Wrapper>
      <Navbar />
      <Hero>
        <HeroText>Your life, a photo</HeroText>
        <h5>print your life in a simple photo</h5>
        <MyButton text="Get Started" />
      </Hero>
      <div className="container">
        <div className="d-flex justify-content-center">
          <Link href="#!" target="_blank" className="mx-3">
            <img src="media/fa-twitter.png" alt="" />
          </Link>
          <Link href="#!" target="_blank" className="mx-3">
            <img src="media/fa-flickr.png" alt="" />
          </Link>
          <Link href="#!" target="_blank" className="mx-3">
            <img src="media/fa-dribbble.png" alt="" />
          </Link>
        </div>
      </div>
    </Wrapper>
  );
}
