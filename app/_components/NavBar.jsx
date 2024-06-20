import React from 'react';
import Button from './Button';

const NavBar = ({ isOpen, toggleSidebar }) => {
    return (
        <div className='sticky top-0 z-10'>
            <div className=' lg:py-[1rem] py-[0.5rem]  px-[1rem] bg-cr-dark-light shadow-lg flex justify-between items-center'>
                <div className='hidden lg:flex flex-row gap-2 items-center'>
                    <div className='h-3 w-3 rounded-full bg-cr-orange border lg:bg-opacity-40 border-opacity-30   border-cr-orange-main  '></div>
                    <h1>Live</h1>
                </div>
                <h1 className='hidden lg:block p-2 border bg-cr-orange border-cr-orange-main rounded-lg bg-opacity-30 border-opacity-40 text-[#787773'>Connect</h1>
                <div className='lg:hidden flex gap-3 lg:border-b border-cr-gray border-opacity-30 pb-4 px-4 mt-4'>
                        <img src="/bananalogo.png" alt="" className=''/>
                        <h1 className='font-medium text-lg lg:text-2xl'>ApeStore</h1>
                    </div>
               <div className='lg:hidden flex flex-row gap-2 items-center'>
               <div>
                        <select name="" id="" className='bg-cr-dark-black-main  w-full text-[#303030] text-xs outline-none p-1.5  rounded-lg border border-[#303030]'>
                            <option value=""></option>
                            <option value="">All Network</option>
                            <option value="">Base</option>
                            <option value="">BNB Smart Chain</option>
                            <option value="">Arbitrum</option>

                        </select>
                    </div>
                    <Button  onClick={toggleSidebar}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" class="main-grid-item-icon" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                    <line x1="8" x2="21" y1="6" y2="6" />
                    <line x1="8" x2="21" y1="12" y2="12" />
                    <line x1="8" x2="21" y1="18" y2="18" />
                    <line x1="3" x2="3.01" y1="6" y2="6" />
                    <line x1="3" x2="3.01" y1="12" y2="12" />
                    <line x1="3" x2="3.01" y1="18" y2="18" />
                </svg>
                    </Button>
               
               </div>

            </div>
          
        </div>

    );
}

export default NavBar;
