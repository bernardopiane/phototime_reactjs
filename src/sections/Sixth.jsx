import React from "react";
import styled from "styled-components";
import { FaApple } from "react-icons/fa";
import { MdAndroid } from "react-icons/md";

const Wrapper = styled.section`
  padding-top: 10em;
  padding-bottom: 10em;
  background-color: #f5f6f7;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  color: #373737;
`;

const Title = styled.div`
  text-transform: uppercase;
  font-size: 1.8em;
  letter-spacing: 0.15em;
  font-family: GothamRounded-Bold;
`;

const Text = styled.div`
  font-size: 1em;
  margin: 2em 0 2em 0;
`;

const Btn = styled.div`
  background-color: #1abc9c;
  text-transform: uppercase;
  color: white;
  padding: 1.5em 4em 1.5em 2em;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: GothamRounded-Bold;
  border-radius: 5px 0 0 5px;
  min-width: 300px;
  cursor: pointer;
`;

const BtnIcon = styled.div`
  border-radius: 0 5px 5px 0;
  background-color: #16a085;
  padding: 0.4em;
  color: white;
  font-size: 2.5em;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BtnArea = styled.div`
  display: flex;
  cursor: pointer;
  transition: all 0.25s ease-in-out;
  :hover {
    filter: brightness(85%);
  }
`;

export default function Sixth() {
  return (
    <Wrapper>
      <div className="container">
        <Title>Download it</Title>
        <Text>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus
          numquam quo explicabo accusantium in vel amet quas omnis, possimus
          facere libero quibusdam nesciunt tempora recusandae nulla pariatur.
          Fuga, iure quod?
        </Text>
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-12 col-lg-6 d-flex justify-content-center align-items-center my-4">
            <BtnArea>
              <Btn>Apple store</Btn>
              <BtnIcon>
                <FaApple />
              </BtnIcon>
            </BtnArea>
          </div>
          <div className="col-12 col-lg-6 d-flex justify-content-center align-items-center my-4">
            <BtnArea>
              <Btn>Play store</Btn>
              <BtnIcon>
                <MdAndroid />
              </BtnIcon>
            </BtnArea>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
