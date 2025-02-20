import React from 'react';

function Brokerage() {
    return ( 
        <div className='container'>
            <div className='row p-5 mt-5 text-center border-top'>
                <div className='col-8 p-4'>
                    <a href='' style={{textDecoration:"none"}}><h3 className='fs-5'>Brokerage calculator</h3></a>
                    <ul style={{textAlign:"left",lineHeight:"2.5",fontSize:"14px"}} className='text-muted '>
                       <li>Call & trades and RMS auto-squareoff:Additional charges of ₹50+GST per order.</li>
                       <li>Digital contract notes will be sent via e-mail.</li>
                       <li>Physical copies of contract notes,if required,shall be charged ₹20 per contract note.Courier charges apply.</li>
                       <li>for NRI account (non-PSI),0.5% 0r ₹100 per executed order for equity(whichever is lower).</li>
                       <li>If te account is in debit balance,any order placed will be charged ₹40 per executed order instead of ₹20 per executed order.</li>
                    </ul>
                </div>
                <div className='col-4 p-4'>
                <a href='' style={{textDecoration:"none"}}><h3 className='fs-5'>List of charges</h3></a>
                </div>
            </div>
        </div>
     );
}

export default Brokerage;