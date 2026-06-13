import React from 'react'

function Hero() {
    return (
      <div className="container">
        <div className="row p-5 mt-5 border-bottom text-muted text-center ">
          <h1 className="fs-3 ">Charges</h1>
          <h4 className="mt-2 fs-5" style={{ color: "#9B9B9B" }}>
            List of All Charges and taxes
          </h4>
        </div>

        <div className="row p-5 text-muted">
          <div className="col-lg-4 col-md-6 col-sm-12 text-center ">
            <img src="/media/pricing0.svg" alt="img" style={{ width: "70%" }} />
            <h1 className="fs-3 mb-4">Free equity delivery</h1>
            <p>
              All equity delivery investments (NSE, BSE), are absolutely free —
              ₹ 0 brokerage.
            </p>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-12 text-center ">
            <img
              src="/media/intradayTrades.svg"
              alt="img"
              style={{ width: "70%" }}
            />
            <h1 className="fs-3 mb-4">Intraday and F&O trades </h1>
            <p>
              Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
              intraday trades across equity, currency, and commodity trades.
              Flat ₹20 on all option trades.
            </p>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-12 text-center ">
            <img src="/media/pricing0.svg" alt="img" style={{ width: "70%" }} />
            <h1 className="fs-3 mb-4">Free direct MF</h1>
            <p>
              All direct mutual fund investments are absolutely free — ₹ 0
              commissions & DP charges.
            </p>
          </div>
        </div>
      </div>
    );
}

export default Hero;