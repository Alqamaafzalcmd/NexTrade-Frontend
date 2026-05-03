import React from "react";

function RightSection({ productName, productDescription, urlLink, learnMore, imageUrl,urlName }) {
  return (
    <div className="container pt-5">
      <div className="row align-items-center ">
        <div className="col-4 pe-5 text-muted">
          <h1 className="fs-3">{productName}</h1>
          <p className="fs-6">{productDescription}</p>

          <div>
            <a href={learnMore} style={{ textDecoration: "none" }}>
             {urlName} <i className="fa-solid fa-arrow-right ms-1 me-3"></i>
            </a>
          </div>
        </div>

        <div className="col-8 ps-5">
          <img src={imageUrl} className="img-fluid" alt="img" />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
