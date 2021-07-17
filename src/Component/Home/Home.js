import React, { useState } from 'react';
import Banner from '../BannerSection/Banner';
import Footer from '../Footer/Footer';
import Info from '../InfoSection/Info';
import { InfoData, InfoData2, InfoData3 } from '../InfoSection/InfoData';
import Service from '../Service/Service';
const Home = () => {

         
    return (
        <div>
            
            <Banner></Banner>
            <Info {...InfoData}></Info>
            <Info {...InfoData2}></Info>
            <Service></Service>
            <Info {...InfoData3}></Info>
            <Footer></Footer>
        </div>
    );
};

export default Home;