import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { dummyData } from '../utils/dummyData';
import CoinCard from './CoinCard';

export default function HeroSwipper() {
    return (
        <>
            <Swiper navigation={false}>
                {dummyData.map((coin, index) => (
                    <SwiperSlide key={index}>
                        <CoinCard details={coin} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
}
