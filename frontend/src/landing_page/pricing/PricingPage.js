import React from 'react';
import Brokerage from './Brokerage';
import Hero from './Hero';
import OpenAccount  from '../OpenAccount';



function PrincingPage() {
    return ( 
        <>
           <Hero/>
           <OpenAccount/>
           <Brokerage/>
        </>
     );
}

export default PrincingPage;