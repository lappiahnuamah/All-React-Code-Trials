import React from 'react';

import Slider from "react-slick";

class SimpleSlider extends React.Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <Slider {...settings}>
        <div>
          <h3>{this.props.profile.name}</h3>
        </div>
        <div>
          <h3><img src={this.props.profile.avatar_url} /></h3>
        </div>
        <div>
          <h3>{this.props.profile.bio}</h3>
        </div>
        <div>
          <h3>{this.props.profile.location}</h3>
        </div>
      </Slider>
    );
  }
}


export default SimpleSlider;
