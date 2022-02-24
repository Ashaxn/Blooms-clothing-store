import React from 'react'
import Announcement from '../components/Announcement'
import Categories from '../components/Categories';
import CategoriesTrend from '../components/CategoriesTrend';
import HomeAnnouncementTwo from '../components/HomeAnnouncementTwo';
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
        <Categories/>
        <HomeAnnouncementTwo />
        <CategoriesTrend />
    </div>
  );
};

export default Home;

