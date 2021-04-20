import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Reviews from '../Reviews/Reviews';
import Services from '../Services/Services';
import Team from '../Team/Team';
import WorkProcess from '../WorksProcess/WorkProcess';


const Home = () => {
    return (
        <div>
            <Header/>
            <Services />
            <WorkProcess/>
            <Team/>
            <Reviews />
            <Footer/>
        </div>
    );
};

export default Home;