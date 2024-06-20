
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
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className='bg-cr-dark-black-light '>
            <NavBar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
            {isSidebarOpen && <SideBar />}
            <div className='bg-[url("https://ape.store/img/apebg.jpg")] pt-[2rem]'>

            <HeroSwipper/>
            </div>
            <div className='grid grid-cols-1  lg:grid-cols-3 md:grid-cols-2 lg:gap-[5rem] lg:p-[1rem] gap-[1rem]  px-3 py-[1rem]'>
                {dummyData.map((coin, index) => (
                    <CoinCard key={index} details={coin} />

                ))}

            </div>
        </div>
    );
}

export default MainPage;
