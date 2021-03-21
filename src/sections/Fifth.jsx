import React from "react";
import styled from "styled-components";
import { FaCheck } from "react-icons/fa";

const Wrapper = styled.section`
  background-image: url("/media/Livello 3.png");
  background-size: cover;
  background-position: center;
  padding-top: 20em;
  padding-bottom: 20em;
`;

const Title = styled.div`
  font-family: GothamRounded-Bold;
  color: white;
  font-size: 24px;
  text-transform: uppercase;
  text-align: center;
`;


const Input = styled.input`
  padding: 0.91em;
  border-radius: 10px 0 0 10px;
  :focus{
    text-decoration: none;
  }
`;

const Confirm = styled.div`
  border-radius: 0 10px 10px 0;
  background-color: #16a085;
  padding: 1em 1.5em 1em 1.5em;
  cursor: pointer;
`;

export default function Fifth() {
  return (
    <Wrapper>
      <div className="container">
        <Title>subscribe to us community</Title>
        <div className="d-flex justify-content-center align-items-center">
          <Input type="text" name="mail" id="mail" placeholder="YOUR EMAIL" />
          <Confirm>
            <FaCheck style={{ color: "white", fontSize: "24px" }} />
          </Confirm>
        </div>
      </div>
    </Wrapper>
  );
}
