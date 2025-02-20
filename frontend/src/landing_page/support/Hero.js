import React from 'react';

function Hero() {
    return ( 
        <section className='container-fluid' id='supportHero'>
            <div className='p-5' id='supportWrapper'>
                <h4>Support Portal</h4>
                <a href=''>Track Tickets</a>
            </div>
            <div className='row p-3 ' >
                <div className='col-1'></div>
                <div className='col-5 p-3'>
                    <h1 className='fs-4 mb-4'>Search for an answer or browse help topics to create a ticket</h1>
                    <input placeholder='Eg:how doi activate F&O,why is my order getting rejected...'/>
                      <br/>
                      <div className='mt-3' >
                        <a href='' style={{marginLeft:"2px",fontFamily:"sans-serif"}}>Track account opening </a>
                        <a href=''style={{marginLeft:"30px",fontFamily:"sans-serif"}}>Track segment activation </a>
                        <a href=''style={{marginLeft:"30px",fontFamily:"sans-serif"}}>Intraday margins </a>
                        <a href=''style={{marginLeft:"2px",fontFamily:"sans-serif"}}>Kite user manual</a>
                      </div>
                </div>
                <div className='col-6 p-3'>
                    <h1 style={{marginLeft:"30px"}}>Featured</h1>
                    <ol style={{fontFamily:"sans-serif",marginLeft:"40px",lineHeight:"30px"}}>
                        <li><a href='' >Latest Intraday leverages and Square-off timings </a></li>
                        <li><a href='' >Surveillance measure on scrips - February 2025 </a></li>
                    </ol>
                </div>
            </div>
        </section>
     );
}

export default Hero;