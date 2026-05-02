import React from "react";

function Hero() {
  return (
    <div className="p-4 pb-5" style={{backgroundColor:"#faf9f6"}}>
      <div className="row mt-2 align-items-center justify-content-between">
        <div className="col-auto">
          <h1>Support Portal</h1>
        </div>

        <div className="col-auto ">
          <button
            className="btn btn-primary fs-6"
            style={{ backgroundColor: "#397DD0", fontWeight: "500" }}
          >
            My Ticket
          </button>
        </div>
      </div>

      <div className="row mt-4 ">
        <div class="input-group">
          <span class="input-group-text" id="visible-addon">
            <i class="fa-solid fa-magnifying-glass"></i>
          </span>
          <input
            type="text"
            class="form-control"
            placeholder="Eg: How do I open my account , How do I activate F&O..."
            aria-label="Username"
            aria-describedby="visible-addon"
          />
          <input
            type="text"
            class="form-control d-none"
            placeholder="Hidden input"
            aria-label="Hidden input"
            aria-describedby="visible-addon"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
