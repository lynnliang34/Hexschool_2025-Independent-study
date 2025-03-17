// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import Swiper core and required modules
import { Autoplay, FreeMode } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import "swiper/css/bundle";
import { getImageURL } from '../util/image-util';


const PhotoSwiper=()=>{
  return(
    <section className="photoSwiper mt-10 mb-11 mb-lg-21">
      <Swiper
        modules={[Autoplay, FreeMode]}
        direction= {"horizontal"}
        loop= {true}
        speed= {8000}
        autoplay= {{
            delay: 0, // 自動播放間隔
            disableOnInteraction: false, // 點擊後繼續撥放
            }}
        freeMode= {true} // 無縫滾動模式
        // .一次可以看到三個 swiper-slide
        slidesPerView= {2.2}
        // wiper-slide 左右間距為 24px
        spaceBetween= {8}
        breakpoints= {{
            // when window width is >= 992px
            768: {
                slidesPerView: 2.8,
                spaceBetween: 20,
              },
            // when window width is >= 992px
            992: {
              slidesPerView: 3.5,
              spaceBetween: 32,
            }
          }}>
        
            {/* <!-- Slides --> */}
            <SwiperSlide>
                <img className="rounded" src={getImageURL('17925.png')} alt="older-stretching"/>
            </SwiperSlide>
            <SwiperSlide>
                <img className="rounded" src={getImageURL('1520.png')} alt="older-chatting"/>
            </SwiperSlide>
            <SwiperSlide>
                <img className="rounded" src={getImageURL('2148694276.png')} alt="older-walking"/>
            </SwiperSlide>
            <SwiperSlide>
                <img className="rounded" src={getImageURL('istockphoto-1898253813-612x612.png')} alt="older-yoga"/>
            </SwiperSlide>
            <SwiperSlide>
                <img className="rounded" src={getImageURL('17925.png')} alt="older-stretching"/>
            </SwiperSlide>
            <SwiperSlide>
                <img className="rounded" src={getImageURL('1520.png')} alt="older-chatting"/>
            </SwiperSlide>
            <SwiperSlide>
                <img className="rounded" src={getImageURL('2148694276.png')} alt="older-walking"/>
            </SwiperSlide>
            <SwiperSlide>
                <img className="rounded" src={getImageURL('istockphoto-1898253813-612x612.png')} alt="older-yoga"/>
            </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default PhotoSwiper;
    
// 首頁課程照片swiper結束