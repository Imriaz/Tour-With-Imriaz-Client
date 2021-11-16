import React from 'react';
import Banner from '../Banner/Banner';
import Packages from '../Packages/Packages';
import Shopping from '../Shopping/Shopping';
import Videos from '../Videos/Videos';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Packages></Packages>
            <Videos></Videos>
            <Shopping></Shopping>
        </div>
    );
};

export default Home;