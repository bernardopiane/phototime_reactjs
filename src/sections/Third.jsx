import React, { Component } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import MyButton from "../components/MyButton";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Wrapper = styled.section`
  background-color: white;
  z-index: 5;
  position: relative;
`;
const Title = styled.h5`
  font-size: 1.5rem;
  color: #16a085;
  text-transform: uppercase;
`;

const Text = styled.p`
  font-size: 12px;
  font-family: GothamRounded-Book;
  color: #373737;
`;

const Details = styled.div`
  padding-top: 10rem;
  padding-bottom: 10rem;
`;

const Phone = styled.div`
  top: 5rem;
  left: 0;
  z-index: 0;
  padding: 4em;
  position: relative;
  height: 500px;
`;

const ArrowBtn = styled.div`
  margin-right: 1em;
  cursor: pointer;
  font-size: 2em;
`;

export default class Third extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.prev = this.prev.bind(this);
  }
  next() {
    this.slider.slickNext();
  }
  prev() {
    this.slider.slickPrev();
  }

  state = {
    activeSlide: 1,
  };

  render() {
    return (
      <Wrapper>
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-6 align-items-center position-relative d-none d-lg-block">
              <Phone>
                <Slider
                  ref={(slider) => (this.slider = slider)}
                  afterChange={(current) =>
                    this.setState({ activeSlide: current + 1 })
                  }
                >
                  <img
                    src="/media/Flat iPhone 5C Mock Up.png"
                    alt=""
                    className="img-fluid"
                    height="300px"
                  />
                  <img
                    src="/media/Flat iPhone 5C Mock Up.png"
                    alt=""
                    className="img-fluid"
                    height="100px"
                  />
                  <img
                    src="/media/Flat iPhone 5C Mock Up.png"
                    alt=""
                    className="img-fluid"
                    height="100px"
                  />
                  <img
                    src="/media/Flat iPhone 5C Mock Up.png"
                    alt=""
                    className="img-fluid"
                    height="100px"
                  />
                  <img
                    src="/media/Flat iPhone 5C Mock Up.png"
                    alt=""
                    className="img-fluid"
                    height="100px"
                  />
                </Slider>
              </Phone>
            </div>
            <Details className="col-12 col-lg-6 text-center text-lg-left">
              <Title>DESIGN</Title>
              <Text>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam
                adipisci accusamus expedita harum debitis quae ab magnam
                consectetur saepe voluptas, consequuntur enim? Delectus ex
                voluptates nam qui facere corrupti commodi.
              </Text>
              <MyButton text="Learn more"></MyButton>
              <div className="py-4 d-none d-lg-block">
                <span>0{this.state.activeSlide}/05</span>
                <div className="d-flex">
                  <ArrowBtn onClick={this.prev}>
                    <FiChevronLeft />
                  </ArrowBtn>
                  <ArrowBtn onClick={this.next}>
                    <FiChevronRight />
                  </ArrowBtn>
                </div>
              </div>
            </Details>
          </div>
        </div>
      </Wrapper>
    );
  }
}
