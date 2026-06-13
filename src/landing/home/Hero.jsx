import { React } from 'react';

function Hero() {
    return (
        <div className="container p-5 mb-5">
            <div className="row text-center text-muted">
                <img src="/media/homeHero.png" alt="Hero img" className="mb-5"  />
                <h1 className='pt-3 mt-5 fs-3'>Invest in everything</h1>
                <p className='mt-3 mb-4'>Online platform to invest in stocks, derivatives, mutual funds and more</p>
                <button  className="btn btn-primary fs-5 mb-5" style={{width:"30%", margin:"0 auto", padding:"5px"}} >Signup</button>
            </div>

        </div>
    )
}

export default Hero;