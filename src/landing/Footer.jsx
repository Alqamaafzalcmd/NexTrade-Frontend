import { React } from 'react';
import "./Footer.css"

function Footer() {
    return (
        <div className="ps-5 pe-3 bg-body-tertiary  pb-5 border-top" style={{ backgroundColor: "#fff" }}>
            <div className="row pt-5 ps-1">
                <div className="col first-col">
                    <img src="/media/logo.svg" alt="logo" style={{ width: "70%" }} />
                    <p className='mt-4 text-muted'>
                        © 2010 - 2026, Zerodha Broking Ltd.
                    </p>
                    <p className='mt-2 text-muted'>All rights reserved.</p>
                    <div className="footer-social fs-5" style={{ listStyle: "none" }}>
                        <i class="fa-brands fa-x-twitter"></i>
                        <i class="fa-brands fa-square-facebook"></i>
                        <i class="fa-brands fa-instagram"></i>
                        <i class="fa-brands fa-linkedin"></i>
                    </div>
                    <hr />
                    <div className="footer-social mb-4 fs-5" style={{ listStyle: "none" }}>
                        <i class="fa-brands fa-youtube"></i>
                        <i class="fa-brands fa-whatsapp"></i>
                        <i class="fa-brands fa-telegram"></i>
                        <i class="fa-brands fa-reddit"></i>
                    </div>

                    <div className="row download">
                        <a href="#"><img src="/media/googlePlayBadge.svg" alt="" /></a>
                        <a href="#"><img src="/media/appstoreBadge.svg" alt="" /></a>
                    </div>
                </div>
                <div className="col">
                    <ul style={{ listStyle: "none" }}>
                        <li><h5>Account</h5></li>
                        <li><a href="#">Open demat account</a></li>
                        <li><a href="#">HUF demat account</a></li>
                        <li><a href="#">Minor demat account</a></li>
                        <li><a href="#">NRI demat account</a></li>
                        <li><a href="#">Commodity</a></li>
                        <li><a href="#">Dematerialisation</a></li>
                        <li><a href="#">Fund transfer</a></li>
                        <li><a href="#">MTF</a></li>
                    </ul>
                </div>



                <div className="col">
                    <ul style={{ listStyle: "none" }}>
                        <li><h5>Support
                        </h5></li>
                        <li><a href="#">Contact us</a></li>
                        <li><a href="#">Support portal</a></li>
                        <li><a href="#">How to file a complaint?</a></li>
                        <li><a href="#">Status of your complaints</a></li>
                        <li><a href="#">Bulletin</a></li>
                        <li><a href="#">Circular</a></li>
                        <li><a href="#">Z-Connect blog</a></li>
                        <li><a href="#">Downloads</a></li>
                    </ul>
                </div>


                <div className="col">
                    <ul style={{ listStyle: "none" }}>
                        <li>
                            <h5>Company</h5>
                        </li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Philosophy</a></li>
                        <li><a href="#"> Press & media</a></li>
                        <li><a href="#">Careers</a></li>
                        <li><a href="#">Zerodha Cares (CSR)</a></li>
                        <li><a href="#">  Zerodha.tech</a></li>
                        <li><a href="#">Open source</a></li>
                        <li><a href="#"> Referral program</a></li>
                    </ul>
                </div>

                <div className="col ">
                    <ul style={{ listStyle: "none" }}>
                        <li><h5>Quick links
                        </h5></li>
                        <li><a href="#">Upcoming IPOs</a></li>
                        <li><a href="#">Brokerage charges</a></li>
                        <li><a href="#">Market holidays</a></li>
                        <li><a href="#">Economic calendar</a></li>
                        <li><a href="#">Calculators</a></li>
                        <li><a href="#">Markets</a></li>
                        <li><a href="#">Sectors</a></li>
                        <li><a href="#">Gift Nifty</a></li>
                    </ul>
                </div>

            </div>

            <div className="container">
                <div className="row text-muted footer-bottom pt-5 ">
                    <p>Zerodha Broking Ltd.: Member of NSE, BSE, MCX & MSEI - SEBI Registration no.:
                        INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd. -
                        SEBI Registration no.: IN-DP-431-2019 Registered Address: Zerodha Broking Ltd.,
                        #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar
                        4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining
                        to securities broking please write to <a href="#">complaints@zerodha.com</a>, for DP related to
                        <a href="#" className='ms-2'>dp@zerodha.com</a>. Please ensure you carefully read the
                        Risk Disclosure Document as
                        prescribed by SEBI | ICF
                    </p>

                    <p>
                        Procedure to file a complaint on <a href="#">SEBI SCORES</a>: Register on SCORES portal.
                        Mandatory details for filing complaints on SCORES: Name, PAN, Address,
                        Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy
                        redressal of the grievances.
                    </p>

                    <p><a href="#">Smart Online Dispute Resolution</a> | <a href="#">Grievances Redressal Mechanism</a></p>

                    <p>Investments in securities market are subject to market risks; read all
                        the related documents carefully before investing.</p>

                    <p>Attention investors: 1) Stock brokers can accept securities as margins
                        from clients only by way of pledge in the depository system w.e.f
                        September 01, 2020. 2) Update your e-mail and phone number with
                        your stock broker / depository participant and receive OTP directly
                        from depository on your e-mail and/or mobile number to create pledge.
                        3) Check your securities / MF / bonds in the consolidated account statement
                        issued by NSDL/CDSL every month.</p>

                    <p>India's largest broker based on networth as per NSE. <a href="#">NSE broker factsheet</a></p>


                    <p>"Prevent unauthorised transactions in your account. Update your mobile numbers/email
                        IDs with your stock brokers. Receive information of your transactions directly from
                        Exchange on your mobile/email at the end of the day. Issued in the interest of investors.
                        KYC is one time exercise while dealing in securities markets - once KYC is done through a
                        SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same
                        process again when you approach another intermediary." Dear Investor, if you are subscribing
                        to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign
                        the IPO application form to authorize your bank to make payment in case of allotment. In case
                        of non allotment the funds will remain in your bank account. As a business we don't give stock
                        tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming
                        to be part of Zerodha and offering such services, please <a href="#">create a ticket here</a>.</p>


                    <p>*Customers availing insurance advisory services offered by Ditto (Tacterial Consulting Private
                        Limited | IRDAI Registered Corporate Agent (Composite) License No CA0738) will not have access
                        to the exchange investor grievance redressal forum, SEBI SCORES/ODR, or arbitration mechanism
                        for such products.</p>

                    <p>Fixed deposit products offered on this platform are third-party products (TPP) and are not Exchange
                        traded products. These are offered through Blostem Fintech Private Limited. Zerodha Broking
                        Limited (SEBI Registration No.: INZ000031633) is acting solely as a distributor for these products.
                        Any disputes arising with respect to such distribution activity will not have access to SEBI SCORES/ODR,
                        Exchange Investor Grievance Redressal Forum, or Arbitration mechanism. Fixed deposits are regulated by
                        the Reserve Bank of India (RBI).</p>

                    <ul className='footer-bottom-list'>
                        <li><a href="#">NSE </a></li>
                        <li><a href="#">BSE </a></li>
                        <li><a href="#">MCX </a></li>
                        <li><a href="#">Terms & conditions</a></li>
                        <li><a href="#">Policies & procedures </a></li>
                        <li><a href="#">Privacy policy </a></li>
                        <li><a href="#">Disclosure </a></li>
                        <li><a href="#">For investor's attention </a></li>
                        <li><a href="#">Investor charter</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer;