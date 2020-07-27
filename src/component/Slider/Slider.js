import React from "react";
import "./Slider.scss";
class Slider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      images: props.images,
      currentIndex: 0,
      translateValue: 0,
      autoplay: true,
      timerID: null,
    };
  }

  goToPrevSlide = () => {
    if (this.state.currentIndex === 0) return;

    this.setState((prevState) => ({
      currentIndex: prevState.currentIndex - 1,
      translateValue: prevState.translateValue + this.slideWidth(),
    }));
  };

  goToNextSlide = () => {
    if (this.state.currentIndex === this.state.images.length - 1) {
      return this.setState({
        currentIndex: 0,
        translateValue: 0,
      });
    }

    this.setState((prevState) => ({
      currentIndex: prevState.currentIndex + 1,
      translateValue: prevState.translateValue + -this.slideWidth(),
    }));
  };

  slideWidth = () => {
    return document.querySelector(".slide").clientWidth;
  };

  renderSlides = () => {
    const { images, currentIndex } = this.state;

    const slides = images.map((image, i) => {
      let isActive = currentIndex === i ? true : false;
      return <Slide key={i} image={image} isActive={isActive} />;
    });
    return slides;
  };

  handleDotClick = (e) => {
    const dotIndex = parseInt(e.target.getAttribute("data-index"));

    if (dotIndex < this.state.currentIndex) {
      return this.setState({
        currentIndex: dotIndex,
        translateValue: -dotIndex * this.slideWidth(),
      });
    }

    this.setState({
      currentIndex: dotIndex,
      translateValue:
        this.state.translateValue +
        (this.state.currentIndex - dotIndex) * this.slideWidth(),
    });
  };

  autoplay = async () => {
    this.setState({ autoplay: !this.state.autoplay });
    if (this.state.autoplay) {
      let timerID = setInterval(() => this.goToNextSlide(), 3000);
      this.setState({ timerID });
    }
    !this.state.autoplay && clearInterval(this.state.timerID);
  };

  render() {
    return (
      <div className="slider">
        <div
          className="slider-wrapper"
          style={{
            transform: `translateX(${this.state.translateValue}px)`,
            transition: "transform ease-out 0.45s",
          }}
        >
          {this.renderSlides()}
        </div>

        <LeftArrow goToPrevSlide={this.goToPrevSlide} />

        <RightArrow goToNextSlide={this.goToNextSlide} />
        <Close autoplay={this.state.autoplay} playtoggle={this.autoplay} />
        <Dots
          images={this.state.images}
          currentIndex={this.state.currentIndex}
          handleDotClick={this.handleDotClick}
        />
      </div>
    );
  }
}

const Close = (props) => {
  return props.autoplay ? (
    <span className="play arrow" onClick={props.playtoggle}>
      {/* {console.log(props.autoplay)} */}
      <i class="fa fa-play" aria-hidden="true"></i>
    </span>
  ) : (
    <span className="pause arrow" onClick={props.playtoggle}>
      <i class="fa fa-pause" aria-hidden="true"></i>
    </span>
  );
};

const Slide = ({ image, isActive }) => {
  const styles = {
    backgroundImage: `url(${image})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "50% 60%",
  };

  return (
    <div className={`slide ${isActive ? "active-slide" : ""}`} style={styles} />
  );
};

const LeftArrow = (props) => {
  return (
    <div className="backArrow arrow" onClick={props.goToPrevSlide}>
      <i className="fa fa-arrow-left fa-2x" aria-hidden="true"></i>
    </div>
  );
};

const RightArrow = (props) => {
  return (
    <div className="nextArrow arrow" onClick={props.goToNextSlide}>
      <i className="fa fa-arrow-right fa-2x" aria-hidden="true"></i>
    </div>
  );
};

const Dots = ({ images, currentIndex, handleDotClick }) => {
  return (
    <div className="dots-container">
      {images.map((image, i) => (
        <div
          className={`${i === currentIndex ? "dot active" : "dot"}`}
          onClick={handleDotClick}
          data-index={i}
          key={i}
          style={{ backgroundImage: `url(${image})` }}
        ></div>
      ))}
    </div>
  );
};

export default Slider;
