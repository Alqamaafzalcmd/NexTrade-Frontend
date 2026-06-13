import React from 'react'

function LeftSection({
  imageUrl,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
  imageWidth
}) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-8 pt-5 ">
          <img src={imageUrl} style={{ width: "70%" }} alt="img" />
        </div>

        <div className="col-4 p-5 mt-5 pe-0 text-muted ">
          <h1 className="mt-5 fs-3">{productName}</h1>
          <p className="fs-8">{productDescription}</p>
          <div className="d-flex flex-wrap  justify-content-start">
            <a href={tryDemo} style={{ textDecoration: "none" }}>
              Try Demo <i className="fa-solid fa-arrow-right ms-1 me-3"></i>
            </a>
            <a href={learnMore} style={{ textDecoration: "none" }}>
              Learn More <i className="fa-solid fa-arrow-right ms-1 "></i>
            </a>
          </div>
          <div className="mt-4 mb-1 d-flex flex-wrap  justify-content-start">
            <a
              href={googlePlay}
              style={{ textDecoration: "none" }}
              className="me-2"
            >
              <img
                src="/media/googlePlayBadge.svg"
                alt="playstre"
                
              />
            </a>
            <a href={appStore} style={{ textDecoration: "none" }}>
              <img src="/media/appstoreBadge.svg" alt="appstore" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;