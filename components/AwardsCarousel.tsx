"use client";

import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import {
  Autoplay,
  EffectCoverflow,
  Pagination,
  Navigation,
  A11y,
  Keyboard,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import styles from "./AwardsCarousel.module.css";

/* Use your existing gallery image paths here */

const galleryImages = [
  "/images/bg/gallery.jpg",
  "/images/bg/about.jpg",
  "/images/bg/publications.jpg",
  "/images/bg/specialities.jpg",
  "/images/bg/contact.jpg",
  "/images/doctor.png",
];

export default function AwardsCarousel() {
  const [reducedMotion, setReducedMotion] =
    useState(false);

  useEffect(() => {
    const query = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    const update = () =>
      setReducedMotion(query.matches);

    update();

    query.addEventListener("change", update);

    return () =>
      query.removeEventListener("change", update);
  }, []);

  return (
    <div
      className={styles.galleryWrapper}
      aria-label="Mediix Clinic photo gallery"
    >
      <Swiper
        key={String(reducedMotion)}
        modules={[
          Autoplay,
          EffectCoverflow,
          Pagination,
          Navigation,
          A11y,
          Keyboard,
        ]}
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView="auto"
        loop={galleryImages.length >= 4}
        speed={reducedMotion ? 0 : 1000}
        spaceBetween={12}
        watchSlidesProgress={true}
        coverflowEffect={{
          rotate: 35,
          stretch: 0,
          depth: 180,
          modifier: 1.15,
          slideShadows: false,
        }}
        autoplay={
          reducedMotion
            ? false
            : {
                delay: 5000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
                waitForTransition: true,
              }
        }
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        navigation={false}
        keyboard={{
          enabled: true,
          onlyInViewport: true,
        }}
        a11y={{
          enabled: true,
          prevSlideMessage: "Previous photograph",
          nextSlideMessage: "Next photograph",
        }}
        className={styles.carousel}
      >
        {galleryImages.map((image, index) => (
          <SwiperSlide
            key={image}
            className={styles.slide}
          >
            <div className={styles.imageCard}>
              <img
                src={image}
                alt={`Mediix Clinic gallery photograph ${index + 1}`}
                className={styles.image}
                loading="lazy"
                decoding="async"
                draggable={false}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}