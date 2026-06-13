import { React } from 'react';

function Education() {
    return (
        <div className="container mt-5 pt-5 ">
            <div className="row ">
                <div className="col-6">
                    <img src="/media/education.svg" alt="" style={{width:"80%"}} />
                </div>

                <div className="col-6  text-muted">
                    <h2 className='mt-5 fs-4'>Free and open market education</h2>
                    <p className='mt-4'>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                    <a className='fw-semibold'href="#" style={{textDecoration:"none"}}>Varsity<i className="fa-solid fa-arrow-right ms-1 mt-1"></i></a>
                    <p className='mt-5'>TradingQ&A, the most active trading and investment community in India for all your market related queries.

                    </p>
                    <a className='fw-semibold' href="#" style={{textDecoration:"none"}}>TradingQ&A<i className="fa-solid fa-arrow-right ms-1 mt-1"></i></a>
                </div>

            </div>
        </div>

    )
}

export default Education;