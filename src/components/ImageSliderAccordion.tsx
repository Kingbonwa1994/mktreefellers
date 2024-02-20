// ImageSliderAccordion.tsx
import React from 'react';
import { Carousel } from 'react-responsive-carousel';

const ImageSliderAccordion = () => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Slider Title</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Accordion Section */}
        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2">Accordion Title</h3>
          <div className="bg-white p-4 rounded shadow">
            {/* Your accordion content goes here */}
            <p className="text-gray-600">Brief caption below the accordion.</p>
          </div>
        </div>

        {/* Image Slider Section */}
        {/* <div>
          <Carousel showThumbs={false} infiniteLoop>
          
            <div>
              <img src="image1.jpg" alt="Image 1" />
            </div>
            <div>
              <img src="image2.jpg" alt="Image 2" />
            </div>
           
          </Carousel>
        </div> */}
      </div>
    </div>
  );
};

export default ImageSliderAccordion;
