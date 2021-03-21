import React from "react";
import styled from "styled-components";

const Button = styled.button`
  color: white;
  text-transform: uppercase;
  font-weight: bold;
  background-color: #16a085;
  border-color: #0c8b72;
  padding: 1em 4em 1em 4em;
  :hover {
    background-color: #0c8b72;
    border-color: #0c8b72;
    color: #d1d1d1;
  }
  :active {
    background-color: #0c8b72;
    border-color: #0c8b72;
  }
  :focus {
    box-shadow: 0 0 0 0.2rem rgba(5, 55, 78, 0.25);
    background-color: #0c8b72;
    border-color: #0c8b72;
  }
`;

export default function MyButton({text}) {
  return <Button className="btn mt-3">{text}</Button>;
}
