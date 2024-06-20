import React from 'react';
import SideBar from './_components/SideBar';
import MainPage from './_components/MainPage';
import NavBar from './_components/NavBar';

const Home = () => {
  return (
    <div className=' grid grid-cols-1 lg:grid-cols-5  bg-cr-dark-black-main'>
      <div className='lg:p-[18px]  hidden lg:block '>
        <SideBar/>
      </div>
      <div className='lg:col-span-4 bg-cr-dark-black'>
      <NavBar  />
        <MainPage/>
      </div>
    </div>
  );
}

export default Home;
