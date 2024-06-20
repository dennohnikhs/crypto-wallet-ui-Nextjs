import React from 'react';
import SideBar from './_components/SideBar';
import MainPage from './_components/MainPage';

const Home = () => {
  return (
    <div className='bg-cr-dark-black grid grid-cols-1 lg:grid-cols-7 '>
      <div>
        <SideBar/>
      </div>
      <div className='bg-cr-dark-light bg-opacity-10 col-span-6 '>
        <MainPage/>
      </div>
    </div>
  );
}

export default Home;
