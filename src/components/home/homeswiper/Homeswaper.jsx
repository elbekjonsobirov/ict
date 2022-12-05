import React from "react";
import "./Homeswaper.css";
import {Link} from 'react-router-dom'
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper";

// Images
import sw1 from "../../imgs/sw1.jpg";
import sw2 from "../../imgs/sw2.jpg";
import sw3 from "../../imgs/sw3.png";
import sw4 from "../../imgs/sw4.jpg";
import sw5 from "../../imgs/sw5.jpg";
import sw6 from "../../imgs/sw6.jpg";

export default function Homeswaper() {
  return (
    <div className="sw-page">
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide
          style={{
            backgroundImage: `url(${sw1})`,
          }}
        >
          <div className="sw-cards">
            <h2 className="sw-modul">1-modul</h2>
            <p className="sw-modul-title">
              Fanning maqsadi va vazifalari, ilmiy tadqiqot faoliyati
            </p>
            <Link to="/1-modul" className="sw-link">
              O'qish
              <i class="fa-sharp fa-solid fa-arrow-right"></i>
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide
          style={{
            backgroundImage: `url(${sw2})`,
          }}
        >
          <div className="sw-cards">
            <h2 className="sw-modul">2-modul</h2>
            <p className="sw-modul-title">
              Ilmiy-tadqiqot faoliyatini olib borishda tezislarning ahamiyati va
              ilmiy tezislarni yozish qoidalari
            </p>
            <Link to="/2-modul" className="sw-link">
              O'qish
              <i class="fa-sharp fa-solid fa-arrow-right"></i>
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide
          style={{
            backgroundImage: `url(${sw3})`,
          }}
        >
          <div className="sw-cards">
            <h2 className="sw-modul">3-modul</h2>
            <p className="sw-modul-title">
              O'zbekiston Respublikasi Adliya Vazirligi huzuridagi Intellektual
              mulk agentligi va agentlik faoliyati haqida
            </p>
            <Link to="/3-modul" className="sw-link">
              O'qish
              <i class="fa-sharp fa-solid fa-arrow-right"></i>
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide
          style={{
            backgroundImage: `url(${sw4})`,
          }}
        >
            <div className="sw-cards">
            <h2 className="sw-modul">4-modul</h2>
            <p className="sw-modul-title">
            Uslubiy ko‘rsatmalarni yaratish va chop etish uslublari
            </p>
            <Link to="/4-modul" className="sw-link">
              O'qish
              <i class="fa-sharp fa-solid fa-arrow-right"></i>
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide
          style={{
            backgroundImage: `url(${sw5})`,
          }}
        >
            <div className="sw-cards">
            <h2 className="sw-modul">5-modul</h2>
            <p className="sw-modul-title">
            Ilmiy-tadqiqot faoliyatini olib borishda ilmiy uslubiy jurnallar. SCOPUS va Web of science bazasi
            </p>
            <Link to="/5-modul" className="sw-link">
              O'qish
              <i class="fa-sharp fa-solid fa-arrow-right"></i>
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide
          style={{
            backgroundImage: `url(${sw6})`,
          }}
        >
            <div className="sw-cards">
            <h2 className="sw-modul">6-modul</h2>
            <p className="sw-modul-title">
            Bitiruv malakaviy ishlar haqida va yozish qoidalari
            </p>
            <Link to="/6-modul" className="sw-link">
              O'qish
              <i class="fa-sharp fa-solid fa-arrow-right"></i>
            </Link>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
