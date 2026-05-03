import { React } from 'react';

function Pricing() {
    return (
        <div className="container mt-5 pt-5">
            <div className="row ">
                <div className="col-6">
                    <h2>Unbeatable pricing</h2>
                    <p>We pioneered the concept of
                        discount broking and price
                        transparency in India. Flat fees
                        and no hidden charges.</p>
                    <div>
                        <a href="#" style={{ textDecoration: "none" }}>See pricing <i className="fa-solid fa-arrow-right ms-1"></i></a>
                    </div>
                </div>

                <div className="col-6 " style={{ fontSize: "0.6rem" }}>
                    <div className="d-flex flex-wrap">
                       

                        <div className="d-flex  align-items-center  me-3" >
                            <img src="/media/pricing0.svg" alt="pricing0 " style={{ width: "90px" }} />
                            <p style={{ width: "60px", marginTop: "8px" }} >Free account
                                opening</p>
                        </div>
                        <div className="d-flex  align-items-center  me-3">
                            <img src="/media/pricing0.svg" alt="pricing0 img" style={{ width: "90px" }} />
                            <p style={{ width: "120px", marginTop: "8px" }}>Free equity delivery
                                and direct mutual funds</p>
                        </div>

                         <div className="d-flex  align-items-center" >
                            <img src="/media/other-trades.svg" alt="pricing0 img" style={{ width: "90px" }} />
                            <p style={{ width: "60px", marginTop: "8px" }}> Intraday and
                                F&O</p>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Pricing;