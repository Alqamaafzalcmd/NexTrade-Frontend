import React from "react";
import {data, topics} from "./collapse.jsx"
function CreateTicket() {

   
  return (
    <div className="container p-5">
      <div className="row justify-content-evenly ">
        <div className="col-lg-8 pe-5 col-md-12 ">
          {/* collapse format */}
          {/* <div className="accordion mb-3">
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                  >
                    Account Opening
                  </button>
                </h2>

                <div id="collapseOne" className="accordion-collapse collapse">
                  <div className="accordion-body">Content 1</div>
                </div>
              </div>
            </div>
          </div> */}

          {data.map((item, i) => (
            <div className="accordion mb-3" key={i}>
              <div className="accordion-item">
                <button
                  className="accordion-button collapsed"
                  data-bs-toggle="collapse"
                  data-bs-target={`#collapse${i}`}
                >
                  <span class="fs-4 me-3 text-primary ">{item[1]}</span>
                  {item[0]}
                </button>

                <div
                  id={`collapse${i}`}
                  className="accordion-collapse collapse"
                >
                  {/* <div className="accordion-body">Content {i}</div> */}
                  {topics[i].map((content, j) => (
                    <div className="accordion-body" key={i + j}>
                      <a
                        href="#"
                        style={{ textDecoration: "none", color: "#397DD0" }}
                      >
                        {" "}
                        {content}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="col-lg-4 ps-5 col-md-12">
          <div
            className="row p-2 ps-4"
            style={{
              borderLeft: "10px solid rgb(255, 145, 0)",
              backgroundColor: "rgb(255, 230, 197)",
            }}
          >
            <ul style={{ textDecoration: "underline" }}>
              <li>
                <a href="#">
                  Trading holiday on account of Maharashtra Day on May 01, 2026
                </a>
              </li>
              <li>
                <a href="#">Surveillance measure on scrips - April 2026</a>
              </li>
            </ul>
          </div>

          <div className="row align-start">
            <ol class="list-group p-3 mt-2">
              <li class="list-group-item">
                <h4>Quick Links</h4>
              </li>
              <li class="list-group-item">
                <a href="#">1. Track account opening</a>
              </li>
              <li class="list-group-item">
                <a href="#">2. Track segment activation</a>
              </li>
              <li class="list-group-item">
                <a href="#">3. Intraday margins</a>{" "}
              </li>
              <li class="list-group-item">
                <a href="#">4. Kite user manual</a>{" "}
              </li>
              <li class="list-group-item">
                <a href="#">5. Learn how to create a ticket</a>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateTicket;
