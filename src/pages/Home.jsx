import React from 'react'
import Announcement from '../components/Announcement'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider';
import Topnavbar from '../components/Topnavbar';

const Home = () => {
  return (
    <div>
        <Topnavbar/>
        <Navbar/>
        <Announcement/>
        <Slider/>
    </div>
  );
};

export default Home;

