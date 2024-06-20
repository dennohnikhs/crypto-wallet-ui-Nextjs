
"use client"
import NavBar from './NavBar';
import CoinCard from './CoinCard';
import { dummyData } from '../utils/dummyData';
import { useState } from 'react';
import SideBar from './SideBar';

import 'swiper/css';
import 'swiper/css/navigation';
import HeroSwipper from './HeroSwipper';




const MainPage = () => {
 

    return (
        <div>
            
            <div className='bg-[url("https://ape.store/img/apebg.jpg")]'>

                <div className=' backdrop-opacity-10 backdrop-invert bg-cr-dark-black-main/95 pt-[2rem] '>
                <HeroSwipper />
                </div>

            </div>
            <div className='grid grid-cols-1 xl:grid-cols-3  lg:grid-cols-2 md:grid-cols-2 lg:gap-[5rem] lg:p-[1rem] gap-[1rem]  px-3 py-[1rem]'>
                {dummyData.map((coin, index) => (
                    <CoinCard key={index} details={coin} />

                ))}

            </div>
        </div>
    );
}

export default MainPage;
