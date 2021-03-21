import React from "react";
import styled from "styled-components";
// import phone from "../media/iPhone.png";
import MyButton from "../components/MyButton";

const Wrapper = styled.section`
  background-color: #f5f6f7;
  padding-top: 10em;
  padding-bottom: 10em;
`;

const PhoneBG = styled.div`
  background-image: url("/media/iPhone.png");
  background-repeat: no-repeat;
  background-size: 50%;
  background-position: 90% -20%;
  height: 600px;
  width: 100%;
  position: absolute;
  z-index: 0;
`;

const Title = styled.h5`
  font-size: 1.5rem;
  letter-spacing: 0.15rem;
  color: #16a085;
  text-transform: uppercase;
`;

const Text = styled.p`
  font-size: 12px;
  font-family: GothamRounded-Book;
  color: #373737;
`;

export default function Second() {
  return (
    <div>
      <div className="d-none d-xl-block position-relative">
        <PhoneBG></PhoneBG>
      </div>
      <Wrapper>
        <div className="container">
          <div className="row">
            <div className="col-12 col-xl-6">
              <div className="d-flex flex-column justify-content-center align-items-center align-items-lg-start">
                <Title> Rappresent your life with a simple photo</Title>
                <Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
                  pariatur ab est deserunt praesentium provident quam a placeat
                  tempora, voluptates, nisi ullam itaque maxime architecto
                  dolores non ducimus, alias laudantium!
                </Text>
                <>
                  <MyButton text="Get started" />
                </>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
}
