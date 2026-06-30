import React from 'react'

function Team() {
    return (
        <div className="container ">
            <div className="row p-5 mt-5  border-top">
                <h1 className='fs-2 text-center text-muted'>People</h1>
            </div>

            <div className="row mb-5 fs-6" >

                <div className="col p-3 text-center">
                    <img src="/media/founder.jpg" alt="" style={{ borderRadius: "100%", width: "295px", height: "295px" }} />
                    <h3 className='text-muted  mt-3'>Alqama Afzal</h3>
                    <h6 className='text-muted mt-3'>Founder, CEO</h6>
                </div>

                <div className="col p-5 fs-6">
                    <p> Nithin bootstrapped and founded NexTrade in 2010 to overcome the hurdles he faced
                        during his decade long stint as a trader.
                        Today, NexTrade has changed the landscape of the Indian broking industry.</p>

                    <p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the
                        Market Data Advisory Committee (MDAC).</p>

                    <p>Playing basketball is his zen.</p>

                    <p >Connect on <a style={{ textDecoration: "none" }} href="">Homepage</a> / <a style={{ textDecoration: "none" }} href="#">TradingQnA</a> / <a style={{ textDecoration: "none" }} href="#">Twitter</a></p>
                </div>


            </div>


        </div>
    );
}

export default Team;
