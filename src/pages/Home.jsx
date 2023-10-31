import React from 'react';
import Navbar from './Navbar';
import Slider from './Slider';
import Clubs from './Clubs';
import Events from './Events';
import Interests from './Interests';
import Footer from './Footer';

const Home = () => {
    return (
        <div>
            <Navbar/>
            <Slider/>
            <Clubs/>
            <Events/>
            <Interests/>
            <Footer/>
        </div>
    );
}

export default Home;
