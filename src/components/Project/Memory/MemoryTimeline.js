import React, { Component } from "react";
import Slider from "react-slick";

const SETTINGS = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 12,
  slidesToScroll: 1,
  initialSlide: 0,
  arrows: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};

class MemoryTimeline extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.yearMap = this.yearMap.bind(this);
  }

  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }

  selectYearHandler(year) {
    this.props.onProductClick(year);
  }

  yearMap(year) {
    return (
      <li className="nav-itemm " key={year + year}>
        {this.props.activeYear == year ? (
          <button
            className="btn btn-light"
            id="pills-home-tab"
            data-id={year}
            data-toggle="pill"
            role="tab"
            aria-controls="pills-home"
            aria-selected="true"
            style={{
              color: "White",
              width: "80px",
              height: "45px",
              borderColor: "#ff7e82",
              backgroundColor: "#ff7e82"
            }}
            onClick={this.selectYearHandler.bind(this, year)}
          >
            {year}
          </button>
        ) : (
          <button
            className="btn btn-outline-secondary "
            id="pills-home-tab"
            data-id={year}
            data-toggle="pill"
            role="tab"
            aria-controls="pills-home"
            aria-selected="true"
            style={{
              width: "80px",
              height: "45px",
              borderColor: "#e2e2e2"
            }}
            onClick={this.selectYearHandler.bind(this, year)}
          >
            {year}
          </button>
        )}
      </li>
    );
  }

  render() {
    return (
      <div>
        <div className="row ml-0 mt-5">
          <div className="mt-2">
            <a className="" onClick={this.previous}>
              <span style={{ cursor: "pointer" }}>
                <i
                  className="far fa-arrow-alt-circle-left"
                  style={{ color: "#ff7e82", fontSize: "20px" }}
                />
              </span>
            </a>
          </div>
          <div className="col-md-11 pr-0">
            <ul className=" nav-pills pl-0 " id="pills-tab" role="tablist">
              <Slider ref={c => (this.slider = c)} {...SETTINGS}>
                {this.props.memoryTimeline.map(this.yearMap)}
              </Slider>
            </ul>
          </div>
          <div className="ml-4 mt-2">
            <a className="" onClick={this.next}>
              <span style={{ cursor: "pointer" }}>
                <i
                  className="far fa-arrow-alt-circle-right"
                  style={{ color: "#ff7e82", fontSize: "20px" }}
                />
              </span>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default MemoryTimeline;
