import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


const SimpleCarousel = (props) => {
    const {desktopItems = 4, tabletItems = 3, mobileItems = 2, slideItems,children, deviceType} = props;
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
      itemClass="image-item"
      responsive={responsive}
      removeArrowOnDeviceType={["tablet", "mobile"]}
      showDots={false}
      arrows={true} 
      itemClass="carousel-item-padding-40-px"
    >  
        {(slideItems || children) ? (slideItems || children) :
        <h2>No data available</h2>
        }
    </Carousel>
  );
};

export default SimpleCarousel;
