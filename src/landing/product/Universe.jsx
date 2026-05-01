import React from 'react'
import "./Universe.css"

function Universe() {
    return (
      <div className="container text-center">
        <div className="row mt-5 pt-5 ">
          <h1 className="fs-4">The Zerodha Universe</h1>
          <p className="mt-3">
            Extend your trading and investment experience even further with our
            partner platforms
          </p>

          <div className="col-lg-4 col-md-6 col-12 text-center text-muted box">
            <img src="/media/zerodhaFundhouse.png" />
            <p>
              Options trading platform that lets you create strategies, analyze
              positions, and examine data points like open interest, FII/DII,
              and more.
            </p>
          </div>

          <div className="col-lg-4 col-md-6 col-12 text-center text-muted box">
            <img src="/media/sensibullLogo.svg" />
            <p>
              Investment research platform that offers detailed insights on
              stocks, sectors, supply chains, and more.
            </p>
          </div>

          <div className="col-lg-4 col-md-6 col-12 text-center text-muted box">
            <img src="/media/tijori.svg" style={{ width: "35%" }} />
            <p>
              Systematic trading platform that allows you to create and backtest
              strategies without coding.
            </p>
          </div>

          <div className="col-lg-4 col-md-6 col-12 text-center text-muted box">
            <img src="/media/streakLogo.png" />
            <p>
              Thematic investing platform that helps you invest in diversified
              baskets of stocks on ETFs.
            </p>
          </div>

          <div className="col-lg-4 col-md-6 col-12 text-center text-muted box">
            <img src="/media/smallcaseLogo.png" />
            <p>
              Personalized advice on life and health insurance. No spam and no
              mis-selling.
            </p>
          </div>

          <div className="col-lg-4 col-md-6 col-12 text-center text-muted box">
            <img src="/media/dittoLogo.png" style={{ width: "30%" }} />
            <p>
              Investment research platform that offers detailed insights on
              stocks, sectors, supply chains, and more.
            </p>
          </div>
        </div>

        <div className="row  mb-5">
          <div className="col mb-4">
            <button
              className="btn btn-primary fs-5 "
              style={{ width: "20%", padding: "5px" }}
            >
              Signup
            </button>
          </div>
        </div>
      </div>
    );
}

export default Universe;