// import Swiper core and required modules
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Mousewheel, Pagination } from "swiper";

// Import Swiper styles
// import 'swiper/css';
import "swiper/css/navigation";
// import 'swiper/css/pagination';
import "swiper/css/scrollbar";

export const Caraousel = () => {
   return (
      <>
         <Swiper
            //   direction={"horizontal"}
            direction={"vertical"}
            slidesPerView={1}
            spaceBetween={30}
            mousewheel={true}
            pagination={{
               clickable: true,
            }}
            modules={[Mousewheel, Pagination]}
            className="mySwiper2"
         >
            <SwiperSlide>
               <img
                  alt="swiper__img"
                  src="https://images.unsplash.com/photo-1593016250787-edf25b355001?ixlib=rb-1.2.1&amp"
               />
            </SwiperSlide>
            <SwiperSlide>
               <img
                  alt="swiper__img"
                  src="https://images.unsplash.com/photo-1505653553729-d8366e1e7c9e?ixlib=rb-1.2.1&amp"
               />
            </SwiperSlide>
            <SwiperSlide>
               <img
                  alt="swiper__img"
                  src="https://images.unsplash.com/photo-1598387846419-a2c870ad3ecd?ixlib=rb-1.2.1&amp"
               />
            </SwiperSlide>
            <SwiperSlide>
               <img
                  alt="swiper__img"
                  src="https://images.unsplash.com/photo-1623615413048-2484fd8591a2?ixlib=rb-1.2.1&amp"
               />
            </SwiperSlide>
            <SwiperSlide>
               <img
                  alt="swiper__img"
                  src="https://images.unsplash.com/photo-1658431618511-adeba775bd66?ixlib=rb-1.2.1&amp"
               />
            </SwiperSlide>
            <SwiperSlide>
               <img
                  alt="swiper__img"
                  src="https://images.unsplash.com/photo-1544713061-21cd773e9130?ixlib=rb-1.2.1&amp"
               />
            </SwiperSlide>
            <SwiperSlide>
               <img
                  alt="swiper__img"
                  src="https://images.unsplash.com/photo-1530043037891-552dedc8d01c?ixlib=rb-1.2.1&amp"
               />
            </SwiperSlide>
            <SwiperSlide>
               <img
                  alt="swiper__img"
                  src="https://images.unsplash.com/photo-1603928807771-3ffe9e26894c?ixlib=rb-1.2.1&amp"
               />
            </SwiperSlide>
            <SwiperSlide>
               <img
                  alt="swiper__img"
                  src="https://images.unsplash.com/photo-1638812675380-60f7a33bdc10?ixlib=rb-1.2.1&amp"
               />
            </SwiperSlide>
            <SwiperSlide>
               <img
                  alt="swiper__img"
                  src="https://images.unsplash.com/photo-1645232868499-a5604b11de02?ixlib=rb-1.2.1&amp"
               />
            </SwiperSlide>
         </Swiper>
      </>
   );
};
