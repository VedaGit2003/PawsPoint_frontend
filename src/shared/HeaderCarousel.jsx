import React, { useState } from 'react';
import { Carousel } from "flowbite-react";

const HeaderCarousel = () => {
  const images = [
    'https://supertails.com/cdn/shop/files/Frame_1405176767-min_6855ee30-6ea4-48ef-96f0-13d809ed6f4d_1600x.png?v=1731579835',
    'https://supertails.com/cdn/shop/files/Frame_1405176767-min_6855ee30-6ea4-48ef-96f0-13d809ed6f4d_1600x.png?v=1731579835',
    'https://supertails.com/cdn/shop/files/Frame_1405176767-min_6855ee30-6ea4-48ef-96f0-13d809ed6f4d_1600x.png?v=1731579835',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
            <Carousel>
        <img src="https://supertails.com/cdn/shop/files/Frame_1405176767-min_6855ee30-6ea4-48ef-96f0-13d809ed6f4d_1600x.png?v=1731579835" alt="..." className='h-56 sm:h-64 xl:h-80 2xl:h-96'/>
        <img src="https://supertails.com/cdn/shop/files/BBB_Main_Banner_desk_1600x.png?v=1732614671" alt="..." className='h-56 sm:h-64 xl:h-80 2xl:h-96'/>
        <img src="https://supertails.com/cdn/shop/files/Collection_Banner-min_868c58c6-6c27-4817-9031-5ca7ea64e03e_1600x.png?v=1732536026" alt="..." className='h-56 sm:h-64 xl:h-80 2xl:h-96'/>
        <img src="https://supertails.com/cdn/shop/files/Henlo_Banner_c6507efc-574c-45af-8027-07f543ab593e_1600x.png?v=1732633841" alt="..." className='h-56 sm:h-64 xl:h-80 2xl:h-96'/>
        <img src="https://supertails.com/cdn/shop/files/Frame_1405176767-min_6855ee30-6ea4-48ef-96f0-13d809ed6f4d_1600x.png?v=1731579835" alt="..." className='h-56 sm:h-64 xl:h-80 2xl:h-96' />
      </Carousel>
      
    </div>
  );
};

export default HeaderCarousel;
