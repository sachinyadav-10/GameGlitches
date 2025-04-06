import React from 'react';
import Carousel from 'react-bootstrap/Carousel';


const banner3 = '/Images/banner3.png';
const Banner2 = "/Images/Banner2.png";
const MainBanner = "/Images/MainBanner.png";

function CarouselCards() {
    return (
        <div className="carousel-wrapper mx-auto my-4">        
        <Carousel>
          <Carousel.Item interval={2000}>
            <img src={MainBanner} className="d-block w-100 carousel-image" />
            
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <img src={Banner2} className="d-block w-100 carousel-image" />
            
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <img src={banner3}  className="d-block w-100 carousel-image"/>
           
          </Carousel.Item>
        </Carousel>
        </div>

      );
}

export default CarouselCards;