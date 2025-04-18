// import React from 'react';
// import { Carousel } from 'antd';
// import Card1 from '../../assets/AdminCarousel/Card1.jpg';
// import Card2 from '../../assets/AdminCarousel/Card 2.jpg';
// import Card3 from '../../assets/AdminCarousel/Card3.png';
// import Card4 from '../../assets/AdminCarousel/Card4.jpg';

// const imageStyle = {
//   width: '100%',
//   height: '100%',
//   objectFit: 'cover',
//   // borderRadius: '12px',
// };

// const cardContainerBase = {
//   // border: '5px solid #fff',
//   // borderRadius: '12px',
//   overflow: 'hidden',
//   position: 'relative',
// };

// const Carousels = () => {
//   const cards = [
//     { src: Card1, title: '' },
//     { src: Card2, title: '' },
//     { src: Card3, title: '' },
//     { src: Card4, title: '' },
//   ];

//   return (
//     <div className="w-full flex justify-center items-center">
//       <div className="w-full max-w-[1400px] px-4">
//         <Carousel autoplay dots={false}>
//           {cards.map((card, index) => (
//            <div key={index} className="flex justify-center items-center bg-white h-[220px] lg:h-[320px]">
//            <div
//              className="w-full h-full sm:w-[320px] sm:h-[40%] lg:w-full lg:h-full transition-all duration-300"
//              style={cardContainerBase}
//            >
//              <img src={card.src} alt={`card-${index}`} style={imageStyle} />
//            </div>
//          </div>
         
//           ))}
//         </Carousel>
//       </div>
//     </div>
//   );
// };

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Card1 from "../../assets/AdminCarousel/Card1.jpg";
import Card2 from "../../assets/AdminCarousel/Card 2.jpg";
import Card3 from "../../assets/AdminCarousel/Card3.png";
import Card4 from "../../assets/AdminCarousel/Card4.jpg";

const items = [
  { id: 1, url: Card1 },
  { id: 2, url: Card2 },
  { id: 3, url: Card3 },
  { id: 4, url: Card4 },
];

const Carousels = () => {
  return (
  
      <Swiper
        modules={[Autoplay]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        slidesPerView={1}
        className="w-full lg:h-72 md:h-56 max-md:h-32"
      >
        {items.map((item) => (
          <SwiperSlide key={item.id}>
            <img
              src={item.url}
              alt={`Slide ${item.id}`}
              className="w-full h-full object-cover rounded-2xl lg:rounded-2xl"
            />
          </SwiperSlide>
        ))}
      </Swiper>

  );
};

export default Carousels;


