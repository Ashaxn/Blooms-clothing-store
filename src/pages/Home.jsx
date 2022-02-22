import React from 'react'
import Announcement from '../components/Announcement'
import Navbar from '../components/Navbar'
import Topnavbar from '../components/Topnavbar';

const Home = () => {
  return (
    <div>
        <Topnavbar/>
        <Navbar/>
        <Announcement/>
    </div>
  );
};

export default Home;

