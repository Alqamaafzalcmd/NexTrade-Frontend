import { React } from 'react';

import Hero from './Hero';
import Pricing from './Pricing';
import Awards from './Awards';
import Education from './Education';
import Stats from './Stats'

import OpenAccount from '../OpenAccount';
import Navbar from '../Navbar'
import Footer from '../Footer'



function HomePage() {
    return (
        <>

           
            <Hero />
            <Stats />
            <Pricing />
            <Education />
            <OpenAccount />
            {/* <Awards /> */}
        

        </>
    )
}

export default HomePage;