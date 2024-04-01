import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function AutoSlider() {
  return (
    <Carousel
      autoPlay
      showStatus={false}
      interval={1000}
      showArrows={false}
      showIndicators={false}
      showThumbs={false}
      infiniteLoop
    >
      <div>
        <img
          src="https://images.pexels.com/photos/2954405/pexels-photo-2954405.jpeg"
          className="w-full h-40 object-cover rounded-lg "
        />
      </div>
      <div>
        <img
          src="https://images.pexels.com/photos/2610756/pexels-photo-2610756.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          className="w-full h-40 object-cover rounded-lg"
        />
      </div>
      <div>
        <img
          src="https://images.pexels.com/photos/135620/pexels-photo-135620.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          className="w-full h-40 object-cover rounded-lg"
        />
      </div>
      <div>
        <img
          src="https://images.pexels.com/photos/802024/pexels-photo-802024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          className="w-full h-40 object-cover rounded-lg"
        />
      </div>
    </Carousel>
  );
}
