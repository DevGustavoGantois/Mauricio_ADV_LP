'use client'

import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { TestimonialsData } from "@/data";
import { FaStar } from "react-icons/fa";

export function TestimonialsSlide() {
    return (
        <Swiper
        modules={[Pagination]} 
        breakpoints={{
            640: {
                slidesPerView: 1,
                spaceBetween: 20, 
                pagination: {
                    clickable: true,
                },
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 30, 
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 40, 
            },
        }}
        loop={true}
        autoplay
        speed={2000}
        >
            {TestimonialsData.map((item, index) => (
                <SwiperSlide key={index}>
                        <div className="border border-white p-8 lg:p-20 h-full cursor-pointer">
                            <div className="flex gap-4 mb-6">
                            <FaStar className="text-2xl text-white" />
                            <FaStar className="text-2xl text-white" />
                            <FaStar className="text-2xl text-white" />
                            <FaStar className="text-2xl text-white" />
                            <FaStar className="text-2xl text-white" />
                            </div>
                            <p className="text-white">
                                {item.testimonial}
                            </p>
                            <h3 className="h3 text-white mt-6">{item.name}</h3>
                        </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}
