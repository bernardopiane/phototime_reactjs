import React, { Component } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import logo from "../media/Livello 4.png";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
// import img1 from "../media/Livello 5.png";
// import img2 from "../media/Livello 6.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Wrapper = styled.section`
  background-color: #f5f6f7;
  z-index: 5;
  position: relative;
  padding-top: 10em;
  padding-bottom: 10em;
`;

const Column = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ArrowBtn = styled.div`
  margin-left: 0.5em;
  margin-right: 0.5em;
  cursor: pointer;
  font-size: 2em;
`;

export default class Fourth extends Component {
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

  render() {
    return (
      <Wrapper>
        <div className="container d-flex flex-xl-column flex-column-reverse">
          <div className="row justify-content-xl-end justify-content-center py-4">
            <ArrowBtn onClick={this.prev}>
              <FiChevronLeft />
            </ArrowBtn>
            <ArrowBtn onClick={this.next}>
              <FiChevronRight />
            </ArrowBtn>
          </div>
          <div className="row">
            <Column className="col-12 col-xl-4 text-center">
              <img src={logo} className="img-fluid" alt="" />
              <h3 className="py-3">Our Comunity</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
            </Column>
            <div className="col-12 col-xl-8">
              <Slider
                slidesToShow={2}
                ref={(slider) => (this.slider = slider)}
                afterChange={(current) =>
                  this.setState({ activeSlide: current + 1 })
                }
              >
                <img src="/media/Livello 5.png" alt="" />
                <img src="/media/Livello 6.png" alt="" />
                <img src="/media/Livello 5.png" alt="" />
                <img src="/media/Livello 6.png" alt="" />
                <img src="/media/Livello 5.png" alt="" />
                <img src="/media/Livello 6.png" alt="" />
                <img src="/media/Livello 5.png" alt="" />
                <img src="/media/Livello 6.png" alt="" />
                <img src="/media/Livello 5.png" alt="" />
                <img src="/media/Livello 6.png" alt="" />
              </Slider>
            </div>
          </div>
        </div>
      </Wrapper>
    );
  }
}
