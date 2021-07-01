import React from "react";
import Carousel from "react-multi-carousel";
import PropTypes from 'prop-types'; 
import "react-multi-carousel/lib/styles.css";
import './style.css';


const SimpleCarousel = (props) => {
    const {desktopItems = 4, tabletItems = 3, mobileItems = 2, slideItems, deviceType, containerClass, itemClass} = props;
    const responsive = {
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: desktopItems,
       
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: tabletItems,
       
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: mobileItems,
      }
    };
  return (
    <Carousel
      deviceType={deviceType}
      itemClass={itemClass}
      responsive={responsive}
      containerClass={containerClass}
      removeArrowOnDeviceType={["tablet", "mobile"]}
      showDots={false}
      arrows={true}
    >  
        {slideItems ? slideItems :
        <h2>No data available</h2>
        }
    </Carousel>
  );
};

SimpleCarousel.propTypes = {
  slideItems: PropTypes.array.isRequired
}

export default SimpleCarousel;
