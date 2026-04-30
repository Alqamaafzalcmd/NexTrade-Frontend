import { React } from 'react';

function Stats() {
    return (
        <div className="container mt-5 pb-5 mb-5 text-muted">

            <div className="row">

                <div className="col-5">

                    <h2 className='fs-2'>Trust with confidence</h2>

                    <div className="mt-5">
                        <h3 className='fs-4'>
                            Customer-first always
                        </h3>
                        <p >That's why 1.6+ crore customers trust
                            Zerodha with ~ ₹6 lakh crores of equity
                            investments, making us India's largest
                            broker; contributing to 15% of daily retail
                            exchange volumes in India.</p>
                    </div>


                    <div className="mt-4">
                        <h3 className='fs-4'>
                            No spam or gimmicks
                        </h3>
                        <p >
                            No gimmicks, spam, "gamification", or
                            annoying push notifications. High
                            quality apps that you use at your pace,
                            the way you like. Our philosophies.</p>
                    </div>

                    <div className="mt-4 ">
                        <h3 className='fs-4'>
                            Do better with money
                        </h3>
                        <p >With initiatives like Nudge and Kill Switch,
                            we don't just facilitate transactions,
                            but actively help you do better with
                            your money.</p>
                    </div>


                    <div className="mt-4">
                        <h3 className='fs-4'>
                            The Zerodha universe
                        </h3>
                        <p >Not just an app, but a whole ecosystem.
                            Our investments in 30+ fintech startups
                            offer you tailored services specific to
                            your needs.</p>
                    </div>



                </div>

                <div className="col-7 d-flex flex-column justify-content-center align-items-center">
                    <img src="np/media/ecosystem.png" alt="Awards img" className="img-fluid" />
                    <div className="row mt-4">
                        <p className='d-block'>
                            <a href="#" style={{ textDecoration: "none", fontSize: "1.2rem" }} className='me-5'>Exports our Product<i className="fa-solid fa-arrow-right ms-1"></i></a>
                            <a href="#" style={{ textDecoration: "none", fontSize: "1.2rem" }} >Try Kite demo<i className="fa-solid fa-arrow-right ms-1"></i></a>
                        </p>
                    </div>
                </div>


            </div>

            <div className="row text-center mt-5">
                <div className="col">
                    <img src="/media/press-logos.png" alt="press img" style={{ widht: "90%" }} />
                </div>
            </div>

        </div>
    )
}

export default Stats;