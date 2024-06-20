import React from 'react';

const SideBar = () => {
    return (
        <div className=' fixed' >


            <div className="flex flex-col h-screen justify-between ">
                <div >
                    <div className='flex gap-1 border-b border-cr-gray border-opacity-30 pb-4 px-4'>
                        <img src="/bananalogo.png" alt="" />
                        <h1 className='font-medium  lg:text-xl'>ApeStore</h1>
                    </div>
                    <ul className=" space-y-1 px-4">
                        <li className='flex flex-row items-center gap-3'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" class="main-grid-item-icon" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                                <circle cx="12" cy="12" r="3" />
                                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
                            </svg>

                            <a
                                href="#"
                                className="  px-4 py-2 text-lg  font-medium text-cr-gray hover:text-white"
                            >
                                New Pairs
                            </a>

                        </li>

                        <li className='flex flex-row items-center gap-3'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" class="main-grid-item-icon" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                                <circle cx="12" cy="12" r="3" />
                                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
                            </svg>

                            <a
                                href="#"
                                className="  px-4 py-2 text-lg  font-mediumm text-cr-gray hover:text-white"
                            >
                                My Apes
                            </a>

                        </li>

                        <li className='flex flex-row items-center gap-3'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" class="main-grid-item-icon" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                                <circle cx="12" cy="12" r="3" />
                                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
                            </svg>

                            <a
                                href="#"
                                className="  px-4 py-2 text-lg  font-medium text-cr-gray hover:text-white"
                            >
                                Token Deployer
                            </a>

                        </li>

                        <li className='flex flex-row items-center gap-3'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" class="main-grid-item-icon" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                                <circle cx="12" cy="12" r="3" />
                                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
                            </svg>

                            <a
                                href="#"
                                className="  px-4 py-2 text-lg  font-medium text-cr-gray hover:text-white"
                            >
                                My Profile
                            </a>

                        </li>


                    </ul>
                </div>
                <div className=" py-6 mb-[4rem] ">
                    <button className=' lg:w-full mb-3 flex gap-1 lg:gap-3 p-4 lg:p-5 justify-center max-w-[200px]  bg-cr-dark-black-main rounded-3xl shadow-md border border-violet-500/100 '>
                        <div className=' p-2 rounded-full bg-white flex justify-center items-center'>
                            <div className='h-[7px] w-[7px] bg-cr-dark-black-main'></div>
                        </div>
                        <h1 className='text-md whitespace-nowrap lg:font-bold'>Create Wallet</h1>
                    </button>
                    <div className='max-w-[200px] '>
                        <select name="" id="" className='bg-cr-dark-black-main  w-full text-[#303030] text-lg outline-none p-1.5 rounded-lg border border-[#303030]'>
                            <option value=""></option>
                            <option value="">All Network</option>
                            <option value="">Base</option>
                            <option value="">BNB Smart Chain</option>
                            <option value="">Arbitrum</option>

                        </select>
                    </div>
                    <div className='mt-3 flex gap-3 p-1.5 max-w-[200px]  justify-center border border-cr-orange-main bg-cr-orange rounded-lg '>
                        <h1>icon</h1>
                        <h1>Tutorial</h1>
                    </div>
                    <div className='max-w-[170px] '>
                        <div className='flex justify-between items-center mt-3'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" class="main-grid-item-icon" fill="none">
                                <path clip-rule="evenodd" d="M1.65 11.562c6.442-2.807 10.738-4.657 12.888-5.551C20.675 3.458 21.95 3.015 22.782 3c.182-.004.591.041.856.256.223.182.285.427.314.599.03.172.066.563.037.87-.332 3.494-1.771 11.974-2.503 15.888-.31 1.656-.92 2.211-1.51 2.266-1.284.118-2.259-.848-3.502-1.663-1.945-1.275-3.043-2.069-4.931-3.313-2.182-1.438-.768-2.228.476-3.52.325-.338 5.98-5.481 6.089-5.948.014-.058.026-.275-.103-.39-.13-.115-.32-.076-.457-.045-.196.045-3.303 2.099-9.322 6.162-.882.605-1.681.9-2.397.885-.789-.017-2.307-.446-3.435-.813-1.384-.45-2.484-.688-2.388-1.452.05-.398.598-.805 1.644-1.22Z" fill="url(#telegram__a)" fill-rule="evenodd" />
                                <defs>
                                    <linearGradient gradientUnits="userSpaceOnUse" id="telegram__a" x1="12" x2="12" y1="3" y2="22.742">
                                        <stop stop-color="#2AABEE" />
                                        <stop offset="1" stop-color="#229ED9" />
                                    </linearGradient>
                                </defs>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" class="main-grid-item-icon" fill="#4e4e4e">
                                <path d="M7.548 21.501c9.056 0 14.01-7.503 14.01-14.01 0-.213 0-.425-.015-.636A10.02 10.02 0 0 0 24 4.305a9.815 9.815 0 0 1-2.828.775 4.94 4.94 0 0 0 2.165-2.723 9.865 9.865 0 0 1-3.127 1.195 4.929 4.929 0 0 0-8.391 4.491A13.98 13.98 0 0 1 1.67 2.898a4.928 4.928 0 0 0 1.525 6.573A4.88 4.88 0 0 1 .96 8.855v.063a4.926 4.926 0 0 0 3.95 4.826 4.914 4.914 0 0 1-2.223.085 4.93 4.93 0 0 0 4.6 3.42A9.88 9.88 0 0 1 0 19.288a13.941 13.941 0 0 0 7.548 2.208" fill="#1DA1F2" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" class="main-grid-item-icon" fill="none" stroke="#4e4e4e" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                                <circle cx="12" cy="7" r="4" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" class="main-grid-item-icon" fill="none" stroke="#4e4e4e" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                            </svg>



                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
}

export default SideBar;
