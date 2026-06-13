import React from 'react'

function Hero() {
    return (
        <div className="container border-bottom p-5">
            <div className="row text-center  p-5 text-muted">
                <div className="col">
                    <h1 className='fs-3'>Zerodha Products</h1>
                    <p className='fs-5 mt-3'>Sleek, modern, and intuitive trading platforms</p>
                    <p>Check out our <a style={{textDecoration:"none"}} href="#">investment offerings <i className="fa-solid fa-arrow-right ms-1"></i></a></p></div>
            </div>
        </div>
    );
}

export default Hero;